http://en.wikipedia.org/wiki/One-time_pad

otp_enc_d: This program will run in the background as a daemon. Upon execution, otp_enc_d must output an error if it cannot be run due to a network error, such as the ports being unavailable. Its function is to perform the actual encoding, as described above in the Wikipedia quote. This program will listen on a particular port/socket, assigned when it is first ran (see syntax below). When a connection is made, otp_enc_d must call accept() to generate the socket used for actual communication, and then use a separate process to handle the rest of the transaction (see below), which will occur on the newly accepted socket.

In the child process of otp_enc_d, it must first check to make sure it is communicating with otp_enc (see otp_enc, below). After verifying that the connection to otp_enc_d is coming from otp_enc, then this child receives from otp_enc plaintext and a key via the communication socket (not the original listen socket). The otp_enc_d child will then write back the ciphertext to the otp_enc process that it is connected to via the same communication socket. Note that the key passed in must be at least as big as the plaintext.

Use this syntax for otp_enc_d:
otp_enc_d listening_port

listening_port is the port that otp_enc_d should listen on. You will always start otp_enc_d in the background, as follows (the port 57171 is just an example; yours should be able to use any port):
$ otp_enc_d 57171 &

This program, and the other 3 network programs, should use "localhost" as the target IP address/host. This makes them use the actual computer they all share as the target for the networking connections.

otp_enc: This program connects to otp_enc_d, and asks it to perform a one-time pad style encryption as detailed above. By itself, otp_enc doesn’t do the encryption - otp_end_d does. The syntax of otp_enc is as follows:
otp_enc plaintext key port

In this syntax, plaintext is the name of a file in the current directory that contains the plaintext you wish to encrypt. Similarly, key contains the encryption key you wish to use to encrypt the text. Finally, port is the port that otp_enc should attempt to connect to otp_enc_d on.

When otp_enc receives the ciphertext back from otp_enc_d, it should output it to stdout. Thus, otp_enc can be launched in any of the following methods, and should send its output appropriately:
$ otp_enc myplaintext mykey 57171
$ otp_enc myplaintext mykey 57171 > myciphertext
$ otp_enc myplaintext mykey 57171 > myciphertext &

otp_dec_d: This program performs exactly like otp_enc_d, in syntax and usage. In this case, however, otp_dec_d will decrypt ciphertext it is given, using the passed-in ciphertext and key. Thus, it returns plaintext again to otp_dec.

otp_dec: Similarly, this program will connect to otp_dec_d and will ask it to decrypt ciphertext using a passed-in ciphertext and key, and otherwise performs exactly like otp_enc.

keygen: This program creates a key file of specified length. The characters in the file generated will be any of the 27 allowed characters, generated using the standard UNIX randomization methods.

The syntax for keygen is as follows:
keygen keylength

Where keylength is the length of the key file in characters. keygen outputs to stdout. Here is an example run, which redirects stdout to a key file of 256 characters called “mykey” (note that mykey is 257 characters long because of the newline):
$ keygen 256 > mykey
