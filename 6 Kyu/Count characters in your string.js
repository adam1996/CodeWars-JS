/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

- apply a function to each char in string 
- for each letter create an object key-value where value is 

*/

function count(string) {
  let data = {}

  for (i = 0; i < string.length; i++){
      let char = string[i];

      if (data[char]){
          data[char]++; 
      } else {
          data[char] = 1;
      }
  }
  return data;
}