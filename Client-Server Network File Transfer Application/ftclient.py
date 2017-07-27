#!/usr/bin/env python

#Ryan Fleming
#CS372
#File Transfer Client

import socket
import sys
from struct import *
#needed for file stuff
import os.path

def openSocket(host, port):
	#validate port number
	if portRange(port) < 1:
		print "ERROR: INVALID PORT NUMBER\n"
		sys.exit(0)
	
	serverConnection = connectToServer(host, port)
	#validate connection
	if serverConnection < 0:
		print "ERROR: FAILURE CONNECTING TO " + host + ":" + str(port)
		sys.exit(0)
	return serverConnection

def portRange(port):
	#if port is not in range return -1
	if int(port) < 1024 or int(port) > 65535:
		return -1
	#if port is in range return the port
	else:
		return int(port)

#connects to server
#https://docs.python.org/2/howto/sockets.html
def connectToServer(host, port):
	#create an INET, STREAMing socket
	serverConnection = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

	#connect on that port
	try:
		serverConnection.connect((host, port))
	#if it doesn't work
	except:
		return -1
	#if it works
	return serverConnection

#takes the socket file dexcriptor and sends port number and command
#https://docs.python.org/2/howto/sockets.html
def sendRequest(sockfd, port, request):	
	try:
		sendData(sockfd, request)
		sendPort(sockfd, port)
	#if it failed
	except:
		print "ERROR: FAILED TO SEND REQUEST"
		#cleanup
		data.close()
		control.close()
		sys.exit(1)

#function to send data
#first we find the size of the data using length
#then we put that size into a struct
#then we send the size to the server inside a struct
#then we send the data itself
#https://docs.python.org/2/howto/sockets.html -> source for sending data
#https://docs.python.org/2/library/struct.html -> source for structs and how to use pack() to fill it
def sendData(sockfd, request):
	#get size
	size = len(request)
	try:
		#put size into struct
		#https://docs.python.org/2/library/struct.html
		#I flag is for unsigned int
		sizeStruct = pack('I', size)
		#send the struct through the socket to server
		sockfd.send(sizeStruct)
		#send the payload data over the socket
		sockfd.send(request)
	#if it fails
	except:
		print "ERROR: FAILURE SENDING DATA\n"
		data.close()
		control.close()
		sys.exit(1)

#sends data port number to server over control port
#https://docs.python.org/2/howto/sockets.html
def sendPort(sockfd, port):
	try:
		portStruct = pack('I', port)
		sockfd.send(portStruct)
	#if it fails
	except:
		print "ERROR: FAILURE SENDING PORT NUMBER\n"
		data.close()
		control.close()
		sys.exit(1)
	
#receives data over data connection
#https://docs.python.org/2/howto/sockets.html
#data comes in structs
#https://docs.python.org/2/library/struct.html
#use this info to parse
def receiveData(sockfd):
	try:
		#get size first using recv
		#it comes in a struct
		sizeStruct = sockfd.recv(4)
		#unpack the size out of the structstruct
		#unpack man page here
		size = unpack('I', sizeStruct)
		#now using the size that is out of the struct from the first packet received from server
		#we can use that to get the actual data out of the python tuple
		#https://docs.python.org/2/library/struct.html -> section 7.3.2.3 from here
		payload = sockfd.recv(size[0])
		return payload
	#if it failed
	except:
		print "ERROR: FAILURE TO RECEIVE DATA"
		data.close()
		control.close()
		sys.exit(1)

#function to receive a file
#split file into name and extension
#receive the file buffer data over the socket
##check current directory to see if it already exists
#if itdoes prompt user for overwrite
#if yes overwrite
#if not append_copy
#open a new file with that name
#write the contents of buffer to that file
#http://stackoverflow.com/questions/82831/check-whether-a-file-exists-using-python
#http://learnpythonthehardway.org/book/ex16.html
def receiveFile(sockfd, fileName):
	#split root and extension
	fileRoot, fileExt = os.path.splitext(fileName)

	print "Receiving " + fileName + " from " + sys.argv[1] + ":" + sys.argv[2]

	#receive file using receiveData
	file = receiveData(sockfd)

	#flag to append _copy
	overwriteFlag = True

	#check to see whether file exists
	#http://stackoverflow.com/questions/82831/check-whether-a-file-exists-using-python
	if os.path.isfile(fileName):
		#prompt
		#use raw_input to get users choice of whether to overwrite
		#if y flag set to true
		overwriteResponse = raw_input("File already exists\nDo you want to replace it? (y/n)")
		if overwriteResponse == 'y':
			overwriteFlag = True
		else:
			overwriteFlag = False
	
	#check flag
	#add to file name
	if overwriteFlag == False:
		#add copy to file name so we don;t overwrite
		fileRoot = fileRoot + "_copy"
		fileName = fileRoot + fileExt
	
	#open the new file
	#https://learnpythonthehardway.org/book/ex16.html
	#w flag for write
	target = open(fileName, 'w')
	#write the data we got from the buffer into the file
	target.write(file)

	#success message
	print "File transfer complete."


#for top level script like a main function in other languages
#https://docs.python.org/3/library/__main__.html
if __name__ == "__main__":
	#validate
	if len(sys.argv) < 5 or len(sys.argv) > 6:
		#print error
		print "ERROR: INCORRECT USAGE\n python ftclient.py <SERVER_HOST> <SERVER_PORT> <COMMAND> <FILENAME> <DATA_PORT>\n"
		sys.exit(0)
	else:
		#connect to server
		control = openSocket(sys.argv[1], int(sys.argv[2]))

	#figure out command
	command = sys.argv[3]
	
	#if it is get
	if command == "-g":
		#send request
		sendRequest(control, int(sys.argv[5]), command)

		#open data connection
		data = openSocket(sys.argv[1], int(sys.argv[5]))

		try:
			#get the file name
			fileName = sys.argv[4]
		#if it fails
		except:
			print "ERROR: FAILED TO GET FILE_NAME\n PARAMETER REQUIRED WITH -g COMMAND"
			control.close()
			data.close()
			sys.exit(0)

		#send file name
		sendRequest(control, int(sys.argv[5]), fileName)

		#get response
		responseCode = receiveData(control)

		#if response is DATA then get the file over data port
		if responseCode == "DATA":
			receiveFile(data, fileName)
		#if reponse code is something else then failure
		else:
			print sys.argv[1] + ":" + sys.argv[2] + " says FILE NOT FOUND"
	#if command is list
	elif command == "-l":
		#send request
		sendRequest(control, int(sys.argv[4]), command)

		#open data connection
		data = openSocket(sys.argv[1], int(sys.argv[4]))

		#get response
		responseCode = receiveData(control)

		#if response is DATA then get the directory over data port
		if responseCode == "DATA":
			responseData = receiveData(data)
			print responseData

	#invalid command
	else:
		print "ERROR: INVALID COMMAND"
	
	#cleanup
	#close data
	data.close()
	print "Closing connection"
	#close control
	control.close()
