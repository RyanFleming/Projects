//Ryan Fleming
//CS344
//Program 4
//keygen
//
#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include <string.h>

int main(int argc, char *argv[]){
	
	//seed time for random
	srand(time(NULL));
	int i;
	int keyLength;
	char key[keyLength + 1];
	char randomLetter;
	//set lenth using atoi
	keyLength = atoi(argv[1]);

	//for loop from 0 until the argument
	//argument is length of keygen
	//use atoi to turn string into integer
	for (i = 0; i < keyLength; i++)
	{
		
		//random letter from that 27 character string
		randomLetter = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"[rand() % 27];
		key[i] = randomLetter;
	}
	//terminate with null character as describd in project description
	key[keyLength] = '\0';
	//print to file
	printf("%s\n", key);
	return 0;
}
