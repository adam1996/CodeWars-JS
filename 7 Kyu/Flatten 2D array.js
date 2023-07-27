function flattenAndSort(arr) {
    /* 
        - reduce() is a method that performs an action on all elements of an array to return a single value- in this case an array.
        - (acc, curr) => acc.concat(curr)
        - The above is called on each element of 2D array. Acc is our accumulator val and curr is current value
        - The acc is the value stored to be returned after each iteration and curr is val being evaled at the moment
        -
    */
    const flattenedArray = arr.reduce((acc, curr) => acc.concat(curr), []);
    return flattenedArray.sort((a, b) => a - b);

    
  }