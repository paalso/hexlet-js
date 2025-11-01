import fs from "fs";

// Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает
// о завершении работы через переданный колбек.

const callback = (error, data) => {
  if (error) console.log(`Error: ${error}!`);
  else {
    console.log("Successfully read:");
    console.log(data);
  }
};

const write = (path, data, callback) => {
  fs.writeFile(path, data, callback);
};

write("./myfile", "data", () => {
  console.log("success");
});
