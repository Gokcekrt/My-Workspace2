/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
*/

function loopingTriangle() {
  let loopArray = ""; //Statement
  for (let i = 0; i < 7; i++) {
    //Statement
    loopArray += "#"; //expression
    console.log(loopArray); //product side effect so statement
  }
}
loopingTriangle();

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)*/

// Your code here.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    //Here we are using i as the index holder for the loop also as the number we are checking.
    if (i % 15 === 0) {
      //For this exercise statement logic is crucial to solve the exercise. Otherwise, the program will not work as expected.
      //First we check specifically for numbers divisible by 15, because if we check for numbers divisible by 3 and 5 separately, the program will not work as expected.
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      //We dont need to check if i is not divisible by 15 because if it is not divisible by 15, it will not be divisible by 3.
      console.log("Fizz");
    } else if (i % 5 === 0) {
      //We dont need to check if i is not divisible by 15 because if it is not divisible by 15, it will not be divisible by 5.
      console.log("Buzz");
    } else {
      //If the number is not divisible by 15, 3, or 5, we print the number itself.Dont need to check if it is not divisible by 3 and 5 because if it is not divisible by 15, it will not be divisible by 3 and 5.
      console.log(`${i}`);
    }
  }
}
fizzBuzz();

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

function chessboard(size) {
  //Really difficult exercise for me to understand first.
  let board = "";

  // DIŞ DÖNGÜ: Satırları (row) sayar. (0'dan 7'ye)
  for (let row = 0; row < size; row++) {
    // İÇ DÖNGÜ: Sütunları (col) sayar. (0'dan 7'ye)
    for (let col = 0; col < size; col++) {
      if ((row + col) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }

    // Her belirtilen size karakter sayısı bittiğinde alt satıra geç.
    board += "\n";
  }
  console.log(board);
}

chessboard(10);
