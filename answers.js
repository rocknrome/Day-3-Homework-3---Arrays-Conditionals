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


////////////////////////////////
// Wild Wild Life
////////////////////////////////
/*Use the following arrays to answer the questions below (name,species ,age, hometown): 
You should be modifying the elements by accessing them. It is up to you which methods to use.*/

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++; //index 2 for the 3rd element in the array
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"; //index 3 for the 4th element in the array
//Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins"); //using push method to add an element at the end
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy 
//array and replace it with "Gameboy".
wolfy[0] = "Gameboy";

