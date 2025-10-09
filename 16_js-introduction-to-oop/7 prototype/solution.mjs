import Money from "./Money.mjs";

const money1 = new Money(100);

// Возвращает значение

// console.log(money1.getValue()); // 100
// console.log(money1.getCurrency()); // 'usd'
// console.log(`${money1}`);

// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo("eur").getValue()); // 70
console.log(`${money1.exchangeTo("eur")}`); // 70
// console.log(`${money1.exchangeTo("eur").exchangeTo("usd")}`); // 70

// console.log(money1.add(new Money(50, "usd")));

const money2 = new Money(200, "eur");
money2.getValue(); // 200
const money3 = money2.add(money1);
const money4 = money1.add(money2);

console.log(`money1: ${money1}`);
console.log(`money2: ${money2}`);
console.log(`money3: ${money3}`);
console.log(`money4: ${money4}`);

console.log(money1.format());
console.log(money3.format());
