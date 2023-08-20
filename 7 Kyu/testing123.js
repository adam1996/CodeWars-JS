var number = function(array) {
    array = array.map((value, index) => {
      return (index + 1) + ': ' + value;
    });
  
    return array;
  }