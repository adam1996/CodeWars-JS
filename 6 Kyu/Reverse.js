function dataReverse(data) {
    const segmentLength = 8;
    const reversedArray = [];
  
    for (let i = data.length - segmentLength; i >= 0; i -= segmentLength) {
      const segment = data.slice(i, i + segmentLength);
      reversedArray.push(...segment);
    }
  
    return reversedArray;
  }