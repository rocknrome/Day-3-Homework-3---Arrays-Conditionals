/////////////////////////////////
//Part I: HTML & CSS
/*Prepare yourself for tomorrow's morning exercise! Watch the following videos on HTML and CSS. You will be working on practicing CSS in your Morning Exercise.

Rank you comfort with the following material on a scale of 0 - 5:

5 - I got this! I am ready to code
////////////////////////////////


////////////////////////////////
// Part II: JavaScript Reps
////////////////////////////////*/
//Write a for loop that will log the numbers 1 through 20.

////////////////////////////////
// Easy Going
////////////////////////////////
for (i=1; i<=20; i++) {
console.log(i);
}
console.log("**************************")

////////////////////////////////
// Get Even
////////////////////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for (i=0; i<=200; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
console.log("**************************")

////////////////////////////////
// Fizz Buzz
////////////////////////////////
/*This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
1. Write a javascript application that logs all numbers from 1 - 100.
2. If a number is divisible by 3 log "Fizz" instead of the number.
3. If a number is divisible by 5 log "Buzz" instead of the number.
4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

*/
//I did this excersize about 8 months ago and here is the replit link to it: https://replit.com/@rocknrome/FizzBuzz#index.js

const output = fizzBuzz(4); //declaring a const "output"
console.log(output); //logging it to the screen

function fizzBuzz(input) { //function that works with our const
  if (typeof input !== 'number') //checking the input. If not a number, then 
    return 'Not a number'; //logging a message

if ((input % 3 === 0) && (input % 5 === 0)) //checking if divisibe by 3 and 5
  return 'FizzBuzz';

if (input % 3 === 0) //checking if divisible by 3 only
      return 'Fizz';

if (input % 5 === 0) //checking if divisible by 5 only
    return 'Buzz';
return (input); //if not divisible by 3 or 5, just returning the input number
}