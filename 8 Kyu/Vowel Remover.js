/* 
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

- for each char in given string check wether it contains a value from an array of lowercase vowels. 
    + An arr containing lowercase vowels
    + A loop through each element in the string- what if it is null? 
    + Check at each iteration of the for loop whether current val is in array of vowels
    + If true we need to store the result in a new string to then return following loop end. 

    replace or us
*/
let string = 'tiger'

const shortcut = string => string.replace(/[euioa]/g, '' );

function shortcut (string) {
    let stripped = string.replace(/[aeiou]/gi, '');
    return stripped; 
  }