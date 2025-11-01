import fs from "fs";

fs.readFile("./myfile", "utf-8", (_error, data) => console.log("First!"));
fs.readFile("./myfile", "utf-8", (_error, data) => console.log("Second!"));
fs.readFile("./myfile", "utf-8", (_error, data) => console.log("Third!"));
