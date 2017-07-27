//Ryan Fleming
//CS344
//OTP
//encryptor

#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
//needed for sockets
#include <sys/socket.h>
#include <string.h>
#include <stdlib.h>
//needed to use sockaddr_in structure
#include <netinet/in.h>
//file control
#include <fcntl.h>
//http://pubs.opengroup.org/onlinepubs/7908799/xns/netdb.h.html
#include <netdb.h>


//send a file
void sendFile(char *fileName, int socketDescriptor, int fileLength);
//get file length to find end of file
long getFileLength(char *fileName);

int main(int argc, char *argv[]){
	int n;
	int portNumber;
	int clientSocketDescriptor;
	//optval for tcp
	//http://tldp.org/HOWTO/TCP-Keepalive-HOWTO/programming.html
	int optval;
	int textFile;
	//sockaddr_in structure to hold server address
	//hostent struct to hold host computer address
	//http://www.cs.rpi.edu/~moorthy/Courses/os98/Pgms/socket.html
	//very good tutorial
	//using "localhost" as advised in project description
	struct sockaddr_in serv_addr;
	struct hostent *server;
	const char hostname[] = "localhost";
	char authentication[] = "enc_bs";
	//open file
	FILE *file;
	//make very large buffer
	char buffer[100000];
	//clear buffer using bzero
	//http://man7.org/linux/man-pages/man3/bzero.3.html
	bzero(buffer, sizeof(buffer));
	//error handling section
	//if incorrect arguments print useage
	if (argc != 4)
	{
		fprintf(stderr, "usage %s <inputfile> <key> <port>\n", argv[0]);
		exit(1);
	}
	//set por number using atoi
	portNumber = atoi(argv[3]);
	//create socket using socket
	//http://www.cs.rpi.edu/~moorthy/Courses/os98/Pgms/socket.html
	clientSocketDescriptor = socket(AF_INET, SOCK_STREAM, 0);
	//if socket descriptor less than 0 error
	if (clientSocketDescriptor < 0)
	{
		perror("Error opening socket");
		exit(1);
	}
	//find server using gethostbyname
	//http://www.cs.rpi.edu/~moorthy/Courses/os98/Pgms/socket.html
	server = gethostbyname(hostname);
	//if it cant find localhost then error
	if(server == NULL)
	{
		perror("Error, no such host");
		exit(1);
	}
	//set optval to true
	//use setsockopt to allow reuse of port as described in assignment description
	//works sometimes
	optval = 1;
	setsockopt(clientSocketDescriptor, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(int));
	//clear server address using bzero
	bzero((char *) &serv_addr, sizeof(serv_addr));
	//setsin_family to AF_INET always
	//use bcopy for server->h_addr because it is a character string
	//http://www.cs.rpi.edu/~moorthy/Courses/os98/Pgms/socket.html
	serv_addr.sin_family = AF_INET;
	bcopy((char *)server->h_addr, (char *)&serv_addr.sin_addr.s_addr, server->h_length);
	//use htons to convert portnumber integer to network byte order
	serv_addr.sin_port = htons(portNumber);
	//connect to server socket and error check to make sure it can annoext
	if (connect(clientSocketDescriptor, (struct sockaddr *) &serv_addr, sizeof(serv_addr)) < 0) 
	{
		perror("Error connecting");
		exit(1);
	}
	//ftp://gd.tuwien.ac.at/languages/c/programming-bbrown/c_075.htm
	//write and read to serve to handshake authenticate
	write(clientSocketDescriptor, authentication, sizeof(authentication));
	read(clientSocketDescriptor, buffer, sizeof(buffer));
	//make sure buffer is handshake authentication of server
	if (strcmp(buffer, "enc_d_bs") != 0)
	{
		//error message
		fprintf(stderr, "could not contact otp_enc_d on port %d\n", portNumber);
		//exit 2 for specific situation
		exit(2);
	}
	//check that keygen file is longer than message
	long fileLength = getFileLength(argv[1]);
	long keyLength = getFileLength(argv[2]);
	if (fileLength > keyLength)
	{
		//print error
		fprintf(stderr, "key '%s' is too short\n", argv[2]);
		exit(1);
	}
	//test for invalid characters
	int testFile = open(argv[1], 'r');
	//read into buffer
	while (read(testFile, buffer, 1) != 0)
	{
		//if not space or capital letters
		if (buffer[0] != ' ' && (buffer[0] < 'A' || buffer[0] > 'Z'))
		{
			//if buffer is not newline
			if(buffer[0] != '\n')
			{
				//error message
				fprintf(stderr, "input contains bad character\n");
				exit(1);
			}
		}
	}
	//clear buffer
	bzero(buffer, sizeof(buffer));
	//all error checks passed
	//send file
	sendFile(argv[1], clientSocketDescriptor, fileLength);
	//send key
	sendFile(argv[2], clientSocketDescriptor, keyLength);
	//make sure it succeeded with read
	n = read(clientSocketDescriptor, buffer, sizeof(buffer));
	if (n < 0)
	{
		perror("Error reading from socket");
		exit(1);
	}
	//print out buffer for debugging
	printf("%s\n", buffer);
	//close socket
	close(clientSocketDescriptor);
	return 0;
}

void sendFile(char *fileName, int socketDescriptor, int fileLength){
	//open file
	int file = open(fileName, 'r');
	//make very large buffer
	char buffer[100000];
	//clear buffer using bzero
	//http://man7.org/linux/man-pages/man3/bzero.3.html
	bzero(buffer, sizeof(buffer));
	int readCount;
	int writtenCount;
	//while lenth to read in entire file in chunks
	while (fileLength > 0)
	{
		//use read to read in
		//ftp://gd.tuwien.ac.at/languages/c/programming-bbrown/c_075.htm
		readCount = read(file, buffer, sizeof(buffer));
		//if readCount is 0, file read is done
		if (readCount == 0)
		{
			break;
		}
		//if readCount is less than 0 error
		if (readCount < 0)
		{
			perror("Clint: Error reading file");
			exit(1);
		}
		//take readCount out of fileLength to escape loop
		fileLength -= readCount;
	}
	char *c;
	//use pointer to character as tracker for position in file
	c = buffer;
	//while loop to write all bytes into socket
	while (readCount > 0)
	{
		//write using write
		//ftp://gd.tuwien.ac.at/languages/c/programming-bbrown/c_075.htm
		writtenCount = write(socketDescriptor, c, readCount);
		//if writtenCount less than 0 error
		if (writtenCount < 0)
		{
			perror("Clint: Error writing to socket");
			exit(1);
		}
		//take writtenCount out of readCount to escape from loop
		//add writtenCount to c to restore position
		readCount -= writtenCount;
		c += writtenCount;
	}
	return;
}


long getFileLength(char *fileName){
	//open file
	FILE *file = fopen(fileName, "r");
	//http://www.cplusplus.com/reference/cstdio/fpos_t/
	//use fpos_t to store position in file
	long fileLength;
	fpos_t position;
	//use fgetpos to save position
	//http://www.cplusplus.com/reference/cstdio/fgetpos/
	fgetpos(file, &position);
	//use fseek to find end of file
	//ftell tells position of pointer
	//use this to find length
	//http://www.cplusplus.com/reference/cstdio/ftell/
	//if statement to end when reaches end
	if (fseek(file, 0, SEEK_END) || (fileLength = ftell(file)) == -1)
	{
		//overflow
		perror("Finding file length");
	}
	//restore position by using fsetpos
	//http://www.cplusplus.com/reference/cstdio/fsetpos/
	fsetpos(file, &position);
	return fileLength;
}


