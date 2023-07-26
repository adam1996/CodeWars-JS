/*Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). */

function minValue(values) {
    // Remove duplicates
    const uniqueValues = values.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    
    // Sort in ascending order
    return parseInt(uniqueValues.sort((a, b) => a - b).join(''));
  }
  
  