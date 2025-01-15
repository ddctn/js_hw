"use strict";

// 1 задача

const str = "abce";
console.log(str[0], str[1], str[3]);

// 2 задача

let num1 = parseInt(prompt("введите первое число", ""));
let num2 = parseInt(prompt("введите второе число", ""));
console.log(num1 > 0 || num2 > 0);

// 3 задача

let age = parseInt(prompt("введите свой возраст", ""));
if (age >= 18) {
  console.log("вы совершеннолетний :)");
} else {
  console.log("вы несовершеннолетний :(");
}
