import fs from "fs";

const path = "anagh.txt";

fs.writeFile(path, "Hello, world!", (err) => {
  if (err) throw err;
  console.log(`Data written to file '${path}' successfully!`);
});
