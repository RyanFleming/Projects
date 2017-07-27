Ryan Fleming
CS372
Assignment 2

ftserver.c

Compile with the included makefile using make
Or compile with gcc -o ftserver ftserver.c

Run with ./ftserver <SERVER_PORT>

Control and Data connections are closed after each transfer.
ftserver remains listening for new connections until terminated by SIGINT


ftclient.py

Give it executable permissions with chmod +x ftclient.py

Run with ./ftclient.py <SERVER_HOST> <SERVER_PORT> <COMMAND> <FILENAME> <DATA_PORT>
Or run with python ftclient.py <SERVER_HOST> <SERVER_PORT> <COMMAND> <FILENAME> <DATA_PORT>
Only supported commands are "-l" to list directory and "-g" to get a file. 
If "-l" is used do NOT use <FILENAME>
If "-g" is used you MUST use <FILENAME>


