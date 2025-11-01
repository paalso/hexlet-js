const data = [16, 64, 4];
const data2 = data.map(Math.sqrt); // [4, 8, 2]
const predicate = (v) => unknown > 2;
const data3 = data2.filter(predicate); // ReferenceError

console.log(data3);
