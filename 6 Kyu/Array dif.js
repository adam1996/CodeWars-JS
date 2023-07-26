function arrayDiff(a, b) {
    const result = [];
  
    a.forEach(item => {
      // If the current element of 'a' is not present in 'b', add it to the 'result' array
      if (!b.includes(item)) {
        result.push(item);
      }
    });
  
    return result;
  }