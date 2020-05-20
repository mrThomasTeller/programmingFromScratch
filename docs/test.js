const readlineSync = require("readline-sync");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetNew = readlineSync.question("alphabet?\n> " + alphabet + "\n> ");
let str = readlineSync.question("str?\n> ");
let strNew = "";

for (let char of str) {
  let index = alphabet.indexOf(char);
  if (index !== -1) {
    strNew += alphabetNew[index];
  } else {
    strNew += char;
  }
}

console.log(strNew);
