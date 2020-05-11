const readlineSync = require("readline-sync");

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let newAlphabet = readlineSync.question(
  "Введите новый алфавит\n> " + alphabet + "\n> "
);
let str = readlineSync.question("Введите строку\n> ");
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
