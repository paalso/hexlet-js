import fs from "fs";

// Вызовется тогда, когда выполнится асинхронная операция
const callback = (error, data) => {
  if (error) console.log(`Error: ${error}!`);
  else {
    console.log("Successfully read:");
    console.log(data);
  }
};

console.log("before read");
// вызов функции не дожидается конца чтения файла,
// код сразу продолжит выполняться дальше
fs.readFile("./myfile", "utf-8", callback);
console.log("after read?");
