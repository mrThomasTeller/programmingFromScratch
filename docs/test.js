const readlineSync = require("readline-sync");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlphabet = readlineSync.question(
  "New alphabet?\n> " + alphabet + "\n> "
);
let str = readlineSync.question("str?\n> ");
let newStr = "";

for (let char of str) {
  let index = alphabet.indexOf(char);
  if (index === -1) {
    newStr += char;
  } else {
    newStr += newAlphabet[index];
  }
}

console.log(newStr);
