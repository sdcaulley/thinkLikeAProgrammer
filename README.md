# thinkLikeAProgrammer
Exercises from Think Like a Programmer by V Anton Spraul

## Half of A Square
Create half of a 5x5 square of #.

### A Square (Reduction of Half of a Square)
Create a 5x5 square of #.

### A Line (Reduction of A Square)
Create a line of 5 #.

## A Sideways Triangle
Create a triangle that starts with one #, grows to four # and then goes back to one #.

## Luhn Checksum Validation
Write a program that takes an identification number of arbitrary length,double the value of every other digit starting from the right, and divide by 10.  We are not creating the check digit, so the program will not finish the validation step.

### Doube Digits Over 10
Treat numbers that create double digits when doubled.

### Change Numbers from Characters to Integers
Change string to number.

### Which Numbers to Double
Figure out which numbers to double.

### Positive or Negative
Write a program that reads 10 integers from the user.  After all the numbers have been entered, the user may ask to display the count of positive or the count of negative numbers.

## Decode a Message
A message has been encoded as a text stream that is to be read character by character. The stream contains a series of comma-delimited integers, each a positive number capable of being represented by a C++ int . However, the character represented by a particular integer depends on the current decoding mode. There are three modes: uppercase, lowercase, and punctuation.

In uppercase mode, each integer represents an uppercase letter: The integer modulo 27 indicates the letter of the alphabet (where 1 = A and so on). So an input value of 143 in uppercase mode would yield the letter H because 143 modulo 27 is 8 and H is the eighth letter in the alphabet.

The lowercase mode works the same but with lowercase letters; the remainder of dividing the integer by 27 represents the lowercase letter (1 = a and so on). So an input value of 56 in lowercase mode would yield the letter b because 57 modulo 27 is 2 and b is the second letter in the alphabet.

In punctuation mode, the integer is instead considered modulo 9, with the interpretation given by Table 2-3 below. So 19 would yield an exclamation point because 19 modulo 9 is 1.

At the beginning of each message, the decoding mode is uppercase letters. Each time the modulo operation (by 27 or 9, depending on mode) results in 0, the decoding mode switches. If the current mode is uppercase, the mode switches to lowercase letters. If the current mode is lowercase, the mode switches to punctuation, and if it is punctuation, it switches back to uppercase.

### Convert a Number to a Letter
We need to transform numbers to letters.
