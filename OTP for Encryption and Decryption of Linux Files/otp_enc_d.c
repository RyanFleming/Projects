//Ryan Fleming
//CS344
//OTP
//encrypting daemon

#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
//needed for sockets
#include <sys/socket.h>
#include <string.h>
#include <stdlib.h>
//needed to use sockaddr_in structure
#include <netinet/in.h>


void encode(char transmission[], char key[]);
int characterToInteger(char c);
char integerToCharacter(int i);

int main(int argc, char *argv[]) {
	//make large buffer
	char buffer[100000];
	char keyBuffer[10000];
	pid_t processID;
	int portNumber;
	int socketFileDescriptor;
	int newSocketFileDescriptor;
	int n;
	int status;
	//using optval to reuse sockets
	//http://beej.us/guide/bgnet/output/html/multipage/setsockoptman.html
	int optval;
	//store size of client
	socklen_t clientLength;
	//store addresses in a sockaddr_in
	//http://pubs.opengroup.org/onlinepubs/7908799/xns/netinetin.h.html
	//serv_addr stores server address, cli_addr stores client address pretty simple
	//http://www.cs.rpi.edu/~moorthy/Courses/os98/Pgms/socket.html
	//good tutorial make sure to study that for final
	struct sockaddr_in serv_addr, cli_addr;
	//error handling
	//if incorrect arguments
	if (argc != 2)
	{
		//error and usage
		fprintf(stderr, "usage %s <port>\n", argv[0]);
		exit(1);
	}
	//create new socket
	//https://linux.die.net/man/2/socket
	//first variable is domain
	//AF_INET is IPv4 Internet protocols
	//second variable is type
	//SOCK_STREAM is 2 way bite streams
	//Third variable is protocol
	//set to 0 when it does not need specific protocol
	socketFileDescriptor = socket(AF_INET, SOCK_STREAM, 0);
	//if file descriptor is less than 0 then error
	if (socketFileDescriptor < 0)
	{
		perror("Server: Error opening socket");
		exit(1);
	}
	//using setsockipt to reuse sockets as described in assignment description
	//works sometimes
	optval = 1;
	setsockopt(socketFileDescriptor, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(int));
	//make sure server address is blank so it can be used correctly
	//http://man7.org/linux/man-pages/man3/bzero.3.html
	//bzero clears it completly since c strings can be super weird somtimes
	bzero((char *) &serv_addr, sizeof(serv_addr));
	//switch commandline string to integer and set it as portNumber
	portNumber = atoi(argv[1]);
	//initialize servaddr
	//http://pubs.opengroup.org/onlinepubs/7908799/xns/netinetin.h.html
	//http://www.cs.rpi.edu/~moorthy/Courses/os98/Pgms/socket.html
	//always set sin_family to AF_INET
	serv_addr.sin_family = AF_INET;
	//portNumber is an integer convert it to network byte order using htons
	serv_addr.sin_port = htons(portNumber);
	//set to IP address of host
	serv_addr.sin_addr.s_addr = INADDR_ANY;
	//bind will bind the socket to the address
	//file descriptor, address to which it is bound and size of address
	//check for error
	if (bind(socketFileDescriptor, (struct sockaddr *) &serv_addr, sizeof(serv_addr)) < 0)
	{
		perror("Server: Error on binding");
		exit(1);
	}
	//listen allows process to listen to socket for connections
	//takes in file descriptor and size of blaclogqueue, always set this to 5
	listen(socketFileDescriptor, 5);
	//while loop to keep daemon running
	while(1) 
	{
		//store length
		clientLength = sizeof(cli_addr);
		//accept system call blocks process until client connects to server
		//wakes up process when client establlished
		//returns new file descriptor
		//second argument is reference pointer to address of client, third argument is size
		newSocketFileDescriptor = accept(socketFileDescriptor, (struct sockaddr *) &cli_addr, &clientLength);
		//check for error
		if (newSocketFileDescriptor < 0)
		{
			perror("Server: Error on accept");
			exit(1);
		}
		//create new thread
		processID = fork();
		//check for error
		if (processID < 0)
		{
			perror("server: Error forking");
			exit(1);
		}
		//if created new thread
		if (processID == 0)
		{
			//clear buffer
			bzero(buffer, sizeof(buffer));
			int bufferCount = sizeof(buffer);
			int readCount = 0;
			//pointer to character to keep track of position in buffer
			char *c = buffer;
			int i;
			char *keyPointer;
			int newLineCount = 0;
			//receive authentication using read
			//ftp://gd.tuwien.ac.at/languages/c/programming-bbrown/c_075.htm
			read(newSocketFileDescriptor, buffer, sizeof(buffer)-1);
			//if authentication is "enc_bs" accept handshake
			//if not respond invalid
			if (strcmp(buffer, "enc_bs") != 0)
			{
				char invalidResponse[] = "invalid";
				//write back
				//ftp://gd.tuwien.ac.at/languages/c/programming-bbrown/c_075.htm
				write(newSocketFileDescriptor, invalidResponse, sizeof(invalidResponse));
				exit(2);
			}
			//if correct
			else
			{
				char validResponse[] = "enc_d_bs";
				write(newSocketFileDescriptor, validResponse, sizeof(validResponse));
			}
			//clear buffer
			bzero(buffer,sizeof(buffer));
			//read in file
			while(1)
			{
				readCount = read(newSocketFileDescriptor, c, bufferCount);
				//once readcount is 0 completely done reading then break
				if (readCount == 0)
				{
					break;
				}
				//if readCount less than 0 error
				if (readCount < 0)
				{
					perror("Server: Error reading from socket");
					exit(1);
				}
				//newline signifies the start of a key
				//search for newlines
				for (i = 0; i < readCount; i++)
				{
					if (c[i] == '\n')
					{
						newLineCount++;
						if (newLineCount == 1)
						{
							//this position is start of key
							keyPointer = c+i+1;
						}
					}
				}
				//second newline is end of transmission so break out of read loop
				if (newLineCount == 2)
				{
					break;
				}
				//move position over where we have read
				c += readCount;
				//decrement buffer count to show how much we have left
				bufferCount -= readCount;
			}
			char transmission[100000];
			//clear transmission
			bzero(transmission, sizeof(transmission));
			//copy only file withgout key
			strncpy(transmission, buffer, keyPointer-buffer);
			//encode
			encode(transmission, keyPointer);
			//send encoded message
			write(newSocketFileDescriptor, transmission, sizeof(transmission));
		}
		//close socket
		close(newSocketFileDescriptor);
		//wait for children to finish
		while (processID > 0)
		{
			processID = waitpid(-1, &status, WNOHANG);
		}
	}
	//close socket
	close(socketFileDescriptor);
	return 0;
}


void encode(char transmission[], char key[]){
	int i;
	char c;
	//loop until end of transmission
	for (i = 0; transmission[i] != '\n'; i++)
	{
		char x = transmission[i];
		//change character on message and character on key in to integers
		//add together
		//then modulo 27
		x = (characterToInteger(transmission[i]) + characterToInteger(key[i])) % 27;
		//convert back into character and replace in string
		transmission[i] = integerToCharacter(x);
	}
	//add null terminating character
	transmission[i] = '\0';
	return;
}

int characterToInteger(char c){
	//if blank space return 26
	if(c == ' ')
	{
		return 26;
	}
	//if not return minus ascii value
	//http://www.asciitable.com/
	else
	{
		return (c - 'A');
	}
}

char integerToCharacter(int i){
	//if 26 return blank space
	if (i == 26)
	{
		return ' ';
	}
	//if not return convert into ascii
	//http://www.asciitable.com/
	else
	{
		return (i + 'A');
	}
}
