// function twoArePositive(a, b, c) {
//     let positive = 0;
//     if (a > 0) {positive += 1}
//     if (b > 0) {positive += 1}
//     if (c > 0) {positive += 1}
//     return positive === 2;
//   }

function twoArePositive(a, b, c){
    return [...arguments].filter((i) => i > 0).length === 2; 
}