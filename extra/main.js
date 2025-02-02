import {multiply, sum, arr} from './add.js';

let myFunction = sum(4, 3);

console.log(myFunction); 
console.log(multiply(4, 3));

let myArr = arr;

let newArr = myArr.map((item) => item * 2);

console.log(newArr);