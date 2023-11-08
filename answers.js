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


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each 
//of them and print out the result.
//researched here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const turtle of turtles) { //typical construct for  FOR OF loop
    const newName = turtle.toUpperCase(); //bringing to upper case thru new variable declaration
    console.log(newName);
}

//As a developer, you'll be a lifelong learner and constantly encountering new things. 
//We'll give you little stretches like this to get you used to looking at documentation and 
//figuring some things out on your own. You've got this!


////////////////////////////////
// Methods, Revisited
////////////////////////////////

//Here is a list of favMovies:
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic')); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//Do the following and console.log the final results (I have included some thought questions, 
//you don't have to write out an answer for those marked as such):

//Note: if you have to add to the array, feel free to add any movie you'd like
favMovies.push('Swordfish');
console.log(favMovies)
console.log('**********************');
//1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort(); //it definitely altered the array pemanently.
console.log(favMovies);
console.log('**********************');
//2. Use the method pop
favMovies.pop(); //no need to specify the element. It removes the last element. Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(favMovies);
console.log('**********************');
//3. push "Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);
console.log('**********************');
//4. Reverse the array
const reversedArray = favMovies.reverse();
console.log(reversedArray); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
console.log('**********************');
//5. Use the shift method
favMovies.shift(); //removes the first element
console.log('**********************');
//6. unshift - what does it return?
favMovies.unshift('James Bond');
console.log(favMovies);
console.log('**********************');
//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained",
//instead of counting it yourself) Thought question: did this permanently alter our array?
console.log(favMovies.indexOf('Django Unchained')); //index is 15
const indexToRemove = favMovies.indexOf('Django Unchained'); //method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
favMovies.splice(indexToRemove, 1, 'Avatar'); //removing the found index, only one index and adding Avatar.
console.log('Updated array:');
console.log(favMovies); //we did change the array permanently.
console.log('**********************');
//8. slice the last half of the array (challenge yourself and try to programatically determine 
//the middle of the array rather than counting it and hard coding it) - Thought question: 
//did this permanently alter our array?
console.log('**********************');
  //PSEUDO CODING:
  //1.take the array.length and divide it by 2 to figure out index in the middle.
  //2. take that index and use it in slice method
  const indexInTheMiddle = (favMovies.length / 2); 
  console.log('Index in the middle is: ');
  console.log(indexInTheMiddle);

//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
const secondHalf = favMovies.slice(indexInTheMiddle);

//10. console.log your final results
console.log('Second half is: ');
  console.log(secondHalf);
//After running the above tasks, console.log the index of "Fast and Furious" 
console.log(secondHalf.indexOf('Fast and Furious'));
console.log('**********************');
//-We removed it from the array, what value do we get when we look for the index of 
//something that is not in the array?
//lets try an example:
const missingElement = [1,2,3];
const missingIndex = missingElement.indexOf(94);
console.log('Absent element\'s index is: ');
console.log(missingIndex); //the JS returns -1 as an index for an absent element.
//Thought question: that we declared the variable favMovies with const, and yet, 
//we were allowed to change the array. Weird? Should we have used let? //no. we used const to declare the ARRAY, 
//but we operate with array's elements.