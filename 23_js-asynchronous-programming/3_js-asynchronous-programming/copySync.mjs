import fs from "fs";

// Обязательно передавать вторым параметром `utf-8`,
// только тогда данные возвратятся в строковом представлении
const content = fs.readFileSync("./myfile", "utf-8");
const result = fs.writeFileSync("./myfile-copy", content);
console.log(result);
