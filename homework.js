console.log('#1: Tallest Mountain');

let heights = [28251, 28169, 29029, 27940];
let tallest = 0;
for ( let i = 0; i < heights.length; i++) {
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

let word =  'bestiary'
let letter = 'y';
let sum = 0;

for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
        sum = sum + 1;
    }
}
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            console.log("Yeah, the letter " + letter + " exists " + sum + " times in my word." )
            //else (word[i] !=== letter) {}
    } else /* if (word[i] !== letter) */ {
            /* this is still printing for every time the letter doesn't appear. How do you keep it from returning
            the "else" result each occurrence? */
            console.log("Nope, that letter doesn't exist in my word.")
        }
    }

// END HANGMAN


// BEGIN PALINDROMES

console.log('#5: Palindromes');

let pdrome = 'amma';
let end = word.length - 1;
let palindrome = true; //whether the word is a palindrome

for ( let index = 0; index < pdrome.length; index++) { /* meaning: start at zero; if the index is shorter than the word length; increase the index by 1*/
if (pdrome[index] !== pdrome[end - index]) {
    console.log('not palnidromic');
    palindrome = false;
    }
}
 // compare letter 0 vs letter 3
 if (pdrome[0] === pdrome[pdrome.length -1]) {
     // palindrome
 }

 //if (pdrome[])

