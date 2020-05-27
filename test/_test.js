const readlineSync = require("readline-sync");
const fs = require("fs");

init();

while (true) {
  // пользователь должен ввести команду
  let str = readlineSync.question("> ");
  // делим строку, которую ввёл пользователь на слова
  let words = str.split(" ");
  let command = words[0];

  // проверяем какую команду ввёл пользователь и вызываем соответствующую функцию
  if (command === "list") {
    list("all");
    //
  } else if (command === "list-unread") {
    list("unread");
    //
  } else if (command === "read") {
    let n = parseInt(words[1]);
    read(n);
    //
  } else if (command === "add") {
    let year = parseInt(words[1]);
    let title = words.slice(2).join(" ");
    add(year, title);
    //
  } else if (command === "remove-read") {
    removeRead();
    //
  } else if (command === "exit") {
    break;
    //
  } else {
    console.log("wrong command");
  }
}

// читает список книг из файла и возвращает их в виде массива
function loadBooks() {
  return JSON.parse(fs.readFileSync("books.json"));
}

// сохраняет список книг в файл
function saveBooks(books) {
  fs.writeFileSync("books.json", JSON.stringify(books));
}

// если файла books.json нет, то создаёт начальный список книг
function init() {
  if (!fs.existsSync("books.json")) {
    let books = [
      {
        name: "Букварь",
        year: 2010,
        read: true,
      },
      {
        name: "Колобок",
        year: 1921,
        read: false,
      },
      {
        name: "Идиот",
        year: 1856,
        read: false,
      },
      {
        name: "100 лет одиночества",
        year: 1920,
        read: true,
      },
    ];

    saveBooks(books);
  }
}

// выводит на экран список книг
// type = "all" | "unread"
function list(type) {
  let books = loadBooks();

  for (let book of books) {
    if (type === "all" || (type === "unread" && !book.read)) {
      let readStr;
      if (type === "unread") {
        readStr = "";
      } else if (book.read) {
        readStr = " (прочитано)";
      } else {
        readStr = " (не прочитано)";
      }

      console.log(book.name + "; " + book.year + readStr);
    }
  }
}

// помечает книгу с номером n как прочитанную
function read(n) {
  let books = loadBooks();
  books[n - 1].read = true;
  saveBooks(books);
}

// добавляет книгу с годом year и именем title
function add(year, title) {
  let newBook = {
    name: title,
    year: year,
    read: false,
  };

  let books = loadBooks();
  books.push(newBook);
  saveBooks(books);
}

// удаляет прочитанные книги из списка
function removeRead() {
  let books = loadBooks();
  let books2 = [];
  for (let book of books) {
    if (!book.read) {
      books2.push(book);
    }
  }
  saveBooks(books2);
}
