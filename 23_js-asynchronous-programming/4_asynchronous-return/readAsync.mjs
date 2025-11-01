import fs from "fs";

// Вызовется тогда, когда выполнится асинхронная операция
const callback = (error, data) => {
  if (error) console.log(`Error: ${error}!`);
  else if (data === "") {
    console.log("Empty file!");
    return;
  } else {
    console.log("Successfully read:");
    console.log(data);
  }
};

const path1 = "./myfile";
const path2 = "./emptyfile";
const path = path2;

console.log("Before read");
fs.readFile(path, "utf-8", callback);
console.log("After read?");
