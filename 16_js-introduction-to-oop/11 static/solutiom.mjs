import Time from "./Time.mjs";

const time = Time.fromString("10:23");
// автоматически вызывается метод toString()
console.log(`The time is ${time}`); // 'The time is 10:23'
