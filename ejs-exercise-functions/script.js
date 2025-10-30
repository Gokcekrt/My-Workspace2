/* FIRST EXERCISE : Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.*/

// Your code here.
function min(a,b){
  if(a<b){
    return a;
  }else{
    return b;
  }
}
/*We aim to write a pure function by avoiding side effects like console.log and making sure it returns a value. For the min function's logic, if the condition a < b is not true, the only possible result is a>=b. Because of this, we know that  b must be the minimum value, which lets us use a simple else statement.*/
console.log(min(0, 10));
console.log(min(5, 5));


/*SECOND EXERCISE :
We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

// Your code here.
function isEven(N){
  // First, we are trying to stop the function by checking the base conditions (0 and 1).
  if(N===0){
    return true; 
  }else if(N===1){
    return false;
    
  // Then, we consider the case where the number is negative, and we try to close it to 0 or 1.
  }else if(N<0){
    return isEven(N+2);
    
  // Now, we only have positive numbers remaining. If we subtract 2, we close the number to 0, 
  // and the evenness or oddness of the number will not change while the function finds the correct answer.
  }else{
    return isEven(N-2);
  };
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//THIRD EXERCISE:
/*Bean counting
You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.*/

// Your code here.
function countChar(word,searchingLetter){
  let countUpperCase=0;
 for(let letter of word){
  if(letter===searchingLetter){
 ++countUpperCase;
 }
 }
  return countUpperCase;
  }
function countBs(word){
  return countChar(word, 'B');
};




console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4