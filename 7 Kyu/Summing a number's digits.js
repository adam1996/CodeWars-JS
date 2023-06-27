/* 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

- Convert number input into an array and then sum the array. 
- Take absolute value of the number input and split 


*/

function sumDigits(number) {
    let num = Math.abs(number).toString().split('');
    const total = num.reduce((acc, cur) => acc + parseInt(cur), 0);
    return total;
    
}
