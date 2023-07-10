/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

+ Get length of the array 
+ Create an object that maps the number of elements to a return statement:

*/
names = ["Alex", "Jacob", "Mark", "Max"]; 

function likes(names) {
    let num = names.length;

    const options = {
        0: 'no one likes this',
        1: `${names.join(', ')} likes this`,
        2: `${names.join(', ')} like this`,
        3: `${names.join(', ')} like this`,
        4: `${names.slice(0, 2).join(', ')} and ${num - 2} others like this`
    };
    
    return options[num];
}

console.log(likes(names))