import fs from "fs";

// Вызовется тогда, когда выполнится асинхронная операция
const callback = (_error, data) => console.log(data);
// префиксом нижнего подчёркивания обозначается неиспользуемый аргумент

// readFile запускает на выполнение задачу чтения файла.
// Вторым параметром обязательно передать utf-8.
// Только в этом случае данные прочитаются в строковом виде.

console.log("before read");
// вызов функции не дожидается конца чтения файла,
// код сразу продолжит выполняться дальше
fs.readFile("./myfile", "utf-8", callback);
fs.readFile("./myfile", "utf-8", (_error, data) => console.log("First!"));
fs.readFile("./myfile", "utf-8", (_error, data) => console.log("Second!"));
console.log("after read?");
