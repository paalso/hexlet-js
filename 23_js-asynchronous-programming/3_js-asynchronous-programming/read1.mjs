import fs from "fs";

// пустая функция, чуть позже разберём её смысл,
// но асинхронная версия readFile требует передачи функции третьим параметром
const noop = () => {};
const content = fs.readFile("./myfile", "utf-8", noop);
console.log(content);
