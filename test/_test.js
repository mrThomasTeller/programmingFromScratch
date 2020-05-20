const fs = require("fs");
const readlineSync = require("readline-sync");

let nameStr = readlineSync.question("name?\n> ");
let year = parseInt(readlineSync.question("year?\n> "));
let newBook = {
  name: nameStr,
  year: year,
  read: false,
};

let books = JSON.parse(fs.readFileSync("books.json"));
let index = -1;
let minYear = Infinity;

for (let i = 0; i < books.length; ++i) {
  if (books[i].year < minYear) {
    minYear = books[i].year;
    index = i;
  }
}

if (index !== -1) {
  books.splice(index, 1);
}

books.push(newBook);

fs.writeFileSync("books.json", JSON.stringify(books));
