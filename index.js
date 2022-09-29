import _ from "lodash";

// Using For
// const myArray = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }

// Using loadash
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);

console.log(sum);
