const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");
let alph = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let strNew = "";

for (let i = 0; i < str.length; ++i) {
  if ((str[i - 1] === " " || str[i - 1] === "") && alph.includes(str[i])) {
    strNew += str[i].toUpperCase();
  } else {
    strNew += str[i];
  }
}
console.log(strNew);
