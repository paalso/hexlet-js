//
//

// IP конвертер
// =============

/*
Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые
преобразовывают представление IP-адреса из десятичного формата с точками в
32-битное число в десятичной форме и обратно.

Функция ipToInt() принимает на вход строку и должна возвращать число.
А функция intToIp() наоборот: принимает на вход число, а возвращает строку.

Используйте функцию parseInt() для перевода строки в необходимую систему
счисления
Изучите возможности метода toString() для числа, рассмотрите примеры
Дополнительно можно использовать метод padStart()

*/

const ipToInt = (ip) => {};

const intToIp = (ipNumber) => {
  const ipNumberHex = ipNumber.toString(16).padStart(12, "0");
  return ipNumberHex;
};

console.log(ipToInt("128.32.10.1")); // 2149583361
console.log(ipToInt("0.0.0.0")); // 0
console.log(ipToInt("255.255.255.255")); // 4294967295

console.log(intToIp(2149583361)); // '128.32.10.1'
console.log(intToIp(0)); // '0.0.0.0'
console.log(intToIp(4294967295)); // '255.255.255.255'

// const ipNumber = 254;
// const ipNumberHex = ipNumber.toString(16);
// console.log(ipNumberHex);
