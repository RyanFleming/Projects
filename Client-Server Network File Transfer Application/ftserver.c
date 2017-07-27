//Ryan Fleming
//CS372
//File Transfer Server
//
//
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <stdint.h>
#include <signal.h>
#include <dirent.h>

void handler(int sig);
int portRange(char *checkPortNumber);
int openSocket(int validPortNumber);
int interpretCommand(int clientSocket, char *receiveBuffer);
unsigned getReceivingSize(int clientSocket);
int getCommand(int clientSocket, char *receiveBuffer, unsigned size);
unsigned getDataPort(int clientSocket);
int sendData(char *sendBuffer, char *data, int clientSocket);
unsigned sendSize(int clientSocket, unsigned size);
int sendPayload(int clientSocket, char *sendBuffer);
int max(int a, int b);
int parseFile(char *fileName, char *buffer);
int transferFile(char *fileName, int clientDataSocket, int clientSocket);

int main (int argc, char *argv[]){
	//set up a signal handler to catch exiting children
	//https://www.win.tue.nl/~aeb/linux/lk/lk-5.html -> tutorial in section 5.2
	//https://linux.die.net/man/2/signal -> man page for useage
	//https://linux.die.net/man/2/sigaction -> for SIGCHLD
	//takes our signal signum and passes it to our handler which we made
	signal(SIGCHLD, handler);
	
	//set up for connections
	char workingBuffer[1024];
	char receiveBuffer[1024];
	char sendBuffer[1024];
	int messageSize;
	int messageStatus;
	int serverPortNumber;
	int dataPortNumber;
		
	//verify usage
	if (argc != 2)
	{
		fprintf (stderr, "ERROR: INCORRECT USAGE\n ./ftserver <SERVER_PORT>\n");
		exit(0);
	}

	//verify port number
	int validPortNumber = portRange(argv[1]); 
	if (validPortNumber == -1)
	{
		fprintf(stderr, "ERROR: INVALID PORT NUMBER\n");
		exit(1);
	} 
	
	//open a socket
	int sockfd = openSocket(validPortNumber);
	//check if it failed
	if (sockfd == -1)
	{
		fprintf(stderr, "ERROR: FAILED OPENING PORT %d\n", validPortNumber);
		exit(1);
	}

	//success message
	printf("Server open on %d\n", validPortNumber);
	
	//get ready to fork
	int pid;
	int status;

	//keep listening until sigint
	while(1){
		//accept connections
		//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#accept
		int clientSocket = accept(sockfd, NULL, NULL);
		if (clientSocket < 0)
		{
			//failure. close the socket
			fprintf(stderr, "ERROR: FAILED CONNECTION\n");
			close(clientSocket);
		}
		//connection resolved
		else
		{
			//good thing I took operating systems first
			//http://man7.org/linux/man-pages/man2/fork.2.html
			//tutorial used ->https://www.youtube.com/watch?v=HDMkuDVuDyc
			pid = fork();
			//if it failed to fork then pid is -1
			if (pid < 0)
			{
				printf("ERROR: FAILURE FORKING\n");
				exit(1);
			}
			//if it succeeded then pid is 0
			else if (pid == 0)
			{
				//success message
				printf("Connection from Client\n");
				int commandKey = interpretCommand(clientSocket, receiveBuffer);	
				
				//get the data port number
				dataPortNumber = getDataPort(clientSocket);
				//if succeeded in getting port
				if (messageStatus == 0)
				{
					//open data port
					int data_sockfd = openSocket(dataPortNumber);
					//success message
					printf("Data connection opened on Port %d\n", dataPortNumber);
					//accept connection
					//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#accept
					int clientDataSocket = accept(data_sockfd, NULL, NULL);

					//if command is "-l" or list
					if (commandKey == 1)
					{
						//we want to send directory contents
						char directory[1024];
						//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#accept
						//getcwd uses a buffer and the size of the buffer
						//puts path into buffer
						getcwd(workingBuffer, 1024);
						//use this guide for working with directories
						//http://www.thegeekstuff.com/2012/06/c-directory/
						//make a pointer to the directory
						DIR *dirPointer = NULL;
						//open the directory into the buyffer
						dirPointer = opendir(workingBuffer);
						//pointer to dirent
						//dirent is a struct that represents an entry in a directory
						struct dirent *direntPointer = NULL;
						//while there is still another entry
						//read it with readdir
						while((direntPointer = readdir(dirPointer)) != NULL)
						{
							//each dirent has a name that we access using d_name
							//use strncmp to find any directory entries named "." or ".."
							//we dont wont to include thse
							//use an if statement for when an entry != one of those
							if ((strncmp(direntPointer->d_name, ".", strlen(direntPointer->d_name)) != 0) && (strncmp(direntPointer->d_name, "..", strlen(direntPointer->d_name)) != 0))
							{
								//using strncat to add a space between each entry in the buffer
								//uses the string and the size
								strncat(directory, direntPointer->d_name, strlen(direntPointer->d_name));
								strncat(directory, " ", 1);
							}
						}
						
						//send the directory data we just made
						//tell client we are sending data on control connection
						sendData(sendBuffer, "DATA", clientSocket);
						//send data ton data connection
						sendData(sendBuffer, directory, clientDataSocket);
						//success message
						printf("Sending directory contents on Port %d\n", dataPortNumber);
						//cleanup
						//close socket
						close(clientSocket);
						//abort child	
						_exit(0);
					}
					//if command is -g or get
					else if (commandKey == 2)
					{
						//get the size of filename
						messageSize = getReceivingSize(clientSocket);
						//get filename
						messageStatus = getCommand(clientSocket, receiveBuffer, messageSize);
						//add null terminator 
						receiveBuffer[messageSize] = '\0';
						//print request
						printf("File %s requested on port %d\n", receiveBuffer, dataPortNumber);

						//get file path using cwd
						getcwd(workingBuffer, 1024);
						//use this guide for working with directories
						//http://www.thegeekstuff.com/2012/06/c-directory/
						//make a pointer to the directory
						DIR *dirPointer = NULL;
						//open the directory into the buyffer
						dirPointer = opendir(workingBuffer);
						//pointer to dirent
						//dirent is a struct that represents an entry in a directory
						struct dirent *direntPointer = NULL;
						int foundFile = 0;
						//while there is still another entry
						while((direntPointer = readdir(dirPointer)) != NULL)
						{
							//compare our receive buffer which contains the file name
							//to the d_name of the next entry in the directory
							//if they match set the foundFile flag
							//use max of size buffer and dirent name since they may be different
							if (strncmp(receiveBuffer, direntPointer->d_name, max(strlen(direntPointer->d_name), strlen(receiveBuffer))) == 0)
							{
								//found it
								foundFile = 1;
							}
						}
						//if we found it the flag is 1
						if (foundFile == 1)
						{
							//print confirmation
							printf("Sending %s on port %d\n", receiveBuffer, dataPortNumber);
							char fileBuffer [8192];
							//parse file into buffer
							parseFile(receiveBuffer, fileBuffer);
							//send confirmation on control port to client that we are sending data
							sendData(sendBuffer, "DATA", clientSocket);
							//send file over the data connection
							transferFile(fileBuffer, clientDataSocket, clientSocket);
							//print confirmations
							printf("Transfer Complete\n");
							//clean up
							//cloe socket
							close(clientSocket);
							//abort child
							_exit(0);
						}
						//could not find file
						else
						{
							printf("File not found. Sending error message on port %d\n", validPortNumber);
							//send error message
							sendData(sendBuffer, "FILE NOT FOUND", clientSocket);
							//cleanup
							//close socket
							close(clientSocket);
							//abort child
							_exit(0);
						}
					}
					//else incomplete message
					else
					{
						fprintf(stderr, "ERROR: MESSAGE NOT RECEIVED\n");
						//cleanup
						//close socket
						close(clientSocket);
						//abort child
						_exit(0);
					}
				}
			}
			//if pid is more than 0 do nothing
			else
			{

			}
		}


 
	}
	return 0;
}

//signal handler to catch exiting children
//https://www.win.tue.nl/~aeb/linux/lk/lk-5.html -> for handler info
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#simpleserver -> sigchld handler in beej's guide
void handler(int sig){
	//http://www.tutorialspoint.com/unix_system_calls/waitpid.htm
	//wait for any child process group ID is equal to the absolute value of pid
	//return immediately if no child has exited
	pid_t pid;
	int status;
	pid = waitpid(-1, &status, WNOHANG);
}


//just makes sure command line input is valid port number instead of a string or an integer out of range
int portRange(char *checkPortNumber){
	//convert to integers
	int validPortNumber = atoi(checkPortNumber);
	//make sure it is in correct range
	if (validPortNumber > 65535 || validPortNumber < 1024)
	{
		//invalid port number
		return -1;
	}
	//valid port number
	return validPortNumber;
}

//Opens socket
//Binds Socket
//Listens for connections
//Beej's guide used heavily for this function
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#socket
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#bind
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#connect
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#listen
int openSocket(int validPortNumber){
	int sockfd;
	//open socket and erro handle
	//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#broadcast
	//get file descriptor
	//if it fails return -1
	if ((sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
	{
		return -1;
	}
	//set up sockaddr_in to get ready to bind
	//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#bind
	struct sockaddr_in server;
	//address family
	server.sin_family = AF_INET;
	//transform port int to short network byte order
	server.sin_port = htons(validPortNumber);
	//use our local ipv4 address
	server.sin_addr.s_addr = INADDR_ANY;
	//change our socket options so we can allow other sockets to bind() to this port
	//get around for "address already in use" error message"
	//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#setsockoptman
	//using option SO_REUSEADDR
	int optval = 1;
	setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof optval);
	//bind it
	if (bind(sockfd, (struct sockaddr *) &server, sizeof(server)) < 0)
	{
		//if it failed return -1
		return -1;
	}
	//listen
	//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#listen
	if (listen(sockfd, 10) < 0)
	{
		//if it failed return -1
		return -1;
	}
	//return the file descriptor
	return sockfd;
}

//uses the clients file descriptor
//parses request
//interprets command
//returns an integer flag that directs main what action to take
//2 is get
//1 is list
//-1 is error
int interpretCommand(int clientSocket, char *receiveBuffer){
	int size = getReceivingSize(clientSocket);
	int i = getCommand(clientSocket, receiveBuffer, size);
	//add null terminator
	receiveBuffer[size] = '\0';
	//interpret commands
	//match string with string compare
	//if command is "-g" or get
	if (strncmp("-g", receiveBuffer, strlen(receiveBuffer)) == 0)
	{
		//return 2 for get flag
		return 2;
	}
	//if command is "-l" or list
	else if (strncmp("-l", receiveBuffer, strlen(receiveBuffer)) == 0)
	{
		//return 1 for list flag
		return 1;
	}
	//all othe results is an error
	else
	{
		//return error flag
		return -1;	
	}
}

//uses file descriptor to interpret size of receiving message
//using read() instead of recv()
//https://linux.die.net/man/3/read
//this makes it simpler for just getting the command line info
//behaves the same as recv() with no flags set in this scenario
unsigned getReceivingSize(int clientSocket){
	unsigned size;
	int i = read(clientSocket, &size, sizeof(unsigned));
	//if couldnt read message return a failure
	if (i < 0)
	{
		//failure
		return -1;
	}
	//success return size
	else
	{
		return size;
	}
}

//uses the file descriptor to read message from client
//puts it in the buffer as a string
//going to use read() again for this
//but in the same context as recv() in beej's guide
//will behave the same way just with default flags
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#sendrecv
int getCommand(int clientSocket, char *receiveBuffer, unsigned size){
	char getCommandBuffer[1024];
	unsigned i;
	unsigned counter = 0;
	//while loop to read from start of message to end
	while (counter < size)
	{
		//read into buffer
		i = read(clientSocket, getCommandBuffer+counter, size-counter);
		//increment counter
		counter += i;
		//if read fails i will be less than 0
		if (i < 0)
		{
			//read failed
			return -1;
		}
		//if read succeded change counter
		else if (i == 0)
		{
			counter = size - counter;
		}
	}
	//put this functions buffer into the main functions buffer
	strncpy(receiveBuffer, getCommandBuffer, size);
	//success
	return 0;
}	

//uses socket file descriptor from command port to find out port number for data port
//same process as receiving size
//same sources
unsigned getDataPort(int clientSocket){
	unsigned dataPortNumber;
	int messageStatus;
	messageStatus = read(clientSocket, &dataPortNumber, sizeof(unsigned));
	//falure
	if (messageStatus < 0)
	{
		return -1;
	}
	else
	{
		return dataPortNumber;
	}
}

//uses a file descriptor, a string and a buffer
//copies string into buffer and sends to client
int sendData(char *sendBuffer, char *data, int clientSocket){
	//put string in buffer
	strncpy(sendBuffer, data, 1024);
	//send size of message to client
	int status = sendSize(clientSocket, (strlen(sendBuffer)));
	//send data payload
	status = sendPayload(clientSocket, sendBuffer);
}

//takes a socket descriptor and a size and sends it over the connection
//using write() instead of send()
//but using the same way as beej's guide
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#sendrecv
//behaves the same as send() but with default flags
unsigned sendSize(int clientSocket, unsigned size){
	unsigned messageSize = size;
	int status = write(clientSocket, &messageSize, sizeof(unsigned));
	//check for failure
	if (status < 0)
	{
		//failure
		return -1;
	}
	else
	{
		//success
		return 0;
	}
}

//sends the body of the message from server to client
//uses write instead of send()
//but in same style as beej's guide
//https://beej.us/guide/bgnet/output/html/singlepage/bgnet.html#sendrecv
//behaves the same as send() but with default flags
int sendPayload(int clientSocket, char *sendBuffer){
	unsigned status;
	//size + overload
	unsigned size = strlen(sendBuffer) + 1;
	unsigned counter = 0;
	//while loop to send from beginning to end
	while (counter < size)
	{
		//send via write
		status = write(clientSocket, sendBuffer+counter, size-counter);
		//increment counter
		counter += status;
		//if write messed up status is less than 0
		if (status < 0)
		{
			//failure
			return -1;
		}
		//if success
		else if (status == 0)
		{
			counter = size - counter;
			//makes counter the same as all bytes that have been sent
			//loop continues until counter is same as size
			//which means all bytes have been sent
		}
	}
	//success
	return 0;
}

//finds max of two integers
int max(int a, int b){
	if (a >= b)
	{
		return a;
	}
	else
	{
		return b;
	}
}

//takes the file name we got from the client and parses the whole thing into a buffer
//http://stackoverflow.com/questions/14002954/c-programming-how-to-read-the-whole-file-contents-into-a-buffer
int parseFile(char *fileName, char *buffer){
	//pointer to file
	FILE *filePointer;
	//use fopen to open file
	//rb flag is for normal read
	filePointer = fopen(fileName, "rb");
	//use fseek to get to end of file
	//tutorial at that stack overflow link a few lines above
	fseek(filePointer, 0, SEEK_END);
	//now the position of our cursor is the size of the file
	long fileSize = ftell(filePointer);
	//rewind pointer back to beginning
	fseek(filePointer, 0, SEEK_SET);
	//make a reading buffer
	char *readingBuffer = malloc(fileSize + 1);
	//read into that new buffer
	fread(readingBuffer, fileSize, 1, filePointer);
	//add a null terminator
	readingBuffer[fileSize] = '\0';
	//close the file
	fclose(filePointer);
	//copy the readbuffer into our sendbuffer
	strncpy(buffer, readingBuffer, 8192);
	return 0;
}

//function to transfer the file over to client
//we already read the file into a buffer so we are just sending a buffer
int transferFile(char *fileName, int clientDataSocket, int clientSocket){
	//send size of file
	int status = sendSize(clientDataSocket, (strlen(fileName)));
	status = sendPayload(clientDataSocket, fileName);
	printf("File Sent\n");
	//clean up
	//close socket
	close(clientDataSocket);
}

