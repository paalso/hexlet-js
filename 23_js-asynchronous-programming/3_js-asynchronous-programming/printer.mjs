import fs from "fs";

// Реализуйте асинхронную функцию, которая читает данные
// файла по указанному путии выводит их в консоль.

const print = (path) =>
  fs.readFile(path, "utf-8", (_error, data) => console.log(data));

print("./myfile");


https://ru.hexlet.io/code_reviews/1913538