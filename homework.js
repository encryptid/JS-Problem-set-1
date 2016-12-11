console.log('#1: Tallest Mountain');

let heights = [28251, 28169, 29029, 27940];
let tallest = 0;
for (let i = 0; i < heights.length; i++) {
    console.log(i);

    //if  height of current is bigger than the tallest one you've seen
    if (tallest < heights[i]) {
        tallest = heights[i];
    }
}
console.log(tallest);

// END TALLEST MOUNTAIN

// BEGIN HANGMAN

console.log('#2: Hangman Lite')

/* Steps to complete:

1. Select word
2. Select letter to compare to word
3. Compare selected letter to each letter in the word until either a match is found or the end is reached
4. Tally matches
5. If end is reached with a match, print "Yeah, the letter 'x' exists 'y' times in my word"
    or
6. If end is reached with NO match, print "Nope, that letter doesn't exist in my word"

*/

/* let word = 'fabio';
console.log(word[0]); // prints 'f'
console.log(word.length);  // prints 5 */

let word = 'bestiary'
let letter = 'y';
let sum = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        sum = sum + 1;
        console.log("Yeah, the letter " + letter + " exists " + sum + " times in my word.")
    } else {
        console.log("Nope, that letter doesn't exist in my word.")
    }

}
    /* if (word[i] === letter) {
        console.log("Yeah, the letter " + letter + " exists " + sum + " times in my word.")
    } else (word[i] !== letter) 
        console.log("Nope, that letter doesn't exist in my word.");
    } */

// for (let i = 0; i < word.length; i++) {
// if (word[i] === letter) {
// console.log("Yeah, the letter " + letter + " exists " + sum + " times in my word.")
//else (word[i] !=== letter) {}
//  } else /* if (word[i] !== letter) */ {
/* this is still printing for every time the letter doesn't appear. How do you keep it from returning
the "else" result each occurrence? 
 
} */

// END HANGMAN

// CHEROKEE HARE
console.log('#3: Cherokee Hare');
/**
 * Create a variable called startingPopulation that keeps track of the initial population of hares, 
 * a variable called birthRate that keeps track of what percentage is born each week, and a variable called 
 * numberOfWeeks that represents how long we're trying to simulate. Print out "There will be x Cherokee Hares 
 * after y weeks" but replace x with the number of hares and y with the number of weeks.
 * 
 * 1. Create initial variables
 * 2. Multiply the population by birth rate
 * 3. Do step 2 per numberOfWeeks variable
 * */


let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;

for (i = 0; i < numberOfWeeks; i++) {
    let babies = startingPopulation * birthRate;
    startingPopulation = startingPopulation + babies;
}

console.log(Math.floor(startingPopulation));

// END CHEROKEE HARE

//BEGIN CHANGE MACHINE
console.log('#4: Change Machine');
/**
 * Imagine we have a very versatile change machine. Create a variable called amount stores a quantity of dollars,
 * and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change
 * machine should return. You want the change machine to return the smallest number of bills possible.
 * 
 * After your code runs you should have a new array of the format [twenties, tens, fives, ones]. 
 * For example, if amount = 47, you should print an array after your code runs that looks like: 
 * [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).
 *
 * ELI5 Steps to complete:
 * 1. Take an amount (47)
 * 2. Compare amount to 20. How many times does 20 go into it? What is left over?
 * 3. Compare remainder to 10. What is left?
 * 4. Compare reamainder to 5. What is left?
 * 5. Compare remainder to 1. What is left?
 * 6. Take remainder (change) and print.
 * 7. Create a function of this process that can be applied to any number
 * 
 */

//Step 1:
function makeChange(money) {
let change = [0, 0, 0, 0];
//            ^  ^  ^  ^  - each "^" represents a denomination; twenties, tens, fives, and ones
//                          keep this so the function knows "change" is an array

//Step 2:
change[0] = Math.floor(money / 20); //Compare "money" to 20 = 2.35 = 2 w/ Math.floor. Put it in the [0] location
// for "change" (line 118)
money = money % 20; // As of this line, "money" equals the remainder after "money" (47) is applied to 20 (7). 
// This will roll into the next int [1] in this case, as JavaScript reads downward

// Step 3:
change[1] = Math.floor(money / 10); //JavaScript now takes the money that was left over from the modulus (line 123)
// and divides by 10, as well as rounds down. In this case (7/10) which is .7, rounded down to 0 (we can't
// use fractions for bills). 0 is plugged into the [1] location.
money = money % 10; // There is no modulus for 7 % 10 so we keep our 7 and move on...

// Step 4:
change[2] = Math.floor(money / 5); // Our 7 is now divided by 5, which is 1.4 = 1 (remember, no fractions);
// so "1" goes into [2]
money = money % 5; //money is still 7 so we're applying % 5 to it, which will give us 2 (5 goes into 7 one time, 
// remainder of 2)

//Step 5:
change[3] = money; // We're taking amount (currently 2, as set by line 136) and applying it directly. Why?
// We could divide it by 1 (the denomination we're seeking) but any number divided against one is still the same number
// (i.e. 2/1=2) so it is unnecessary in this case. There is no reason to run a modulus on it because this is the
// last denomination we need.

// at this point, change should equal [2, 0, 1, 2]

//Two problems at this point: 
// 1. console.log(change) prints nothing to the console within the curly bracket. If we put it outside the bracket,
// JS throws an error because "change" hasn't been defined outside of the function. I can try to call "money" but
// I haven't defined it as anything. Which means...
// 2. I don't know how to call the function
return change
}

let bills = makeChange(47); //declare a new variable and tell the function what should be in "money"'s place up in
// line 118. This plugs the number into the function and runs it. I guess
console.log(bills);
/* let change = [0, 0, 0, 0];
makeChange(47);
console.log(change); */


// END CHANGE MACHINE

// BEGIN PALINDROMES

console.log('#5: Palindromes');

let pdrome = 'amma';
let end = word.length - 1;
let palindrome = true; //whether the word is a palindrome

for (let index = 0; index < pdrome.length; index++) { // meaning: start at zero; if the index is shorter than the word length; increase the index by 1
    if (pdrome[index] !== pdrome[end - index]) {
        console.log('not palindromic');
        palindrome = false;
    }
}
// compare letter 0 vs letter 3

if (pdrome[0] === pdrome[pdrome.length - 1]) {
    // palindrome
}

 //if (pdrome[])

