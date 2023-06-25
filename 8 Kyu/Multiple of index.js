/* 
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


- for each element in arr see whether [i] % index == 0 if true- store original value in a new array to return. 
    + value divided by index value - what are the data types and to we need to make index values numerical? Is it an array of strings or ints.  
*/

x = [22, -6, 32, 82, 9, 25];
function multipleOfIndex(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            result + array[i];
        }
    }
    return result;
  }

console.log(multipleOfIndex(x))