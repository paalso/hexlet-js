// https://ru.hexlet.io/challenges/js_functions_ip_converter_exercise/instance
// https://ru.hexlet.io/code_reviews/253743

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

const toChunks = (array, chunkSize) => {
  const chunks = [];
  for (let chunkStart = 0; chunkStart < array.length; chunkStart += chunkSize)
    chunks.push(array.slice(chunkStart, chunkStart + chunkSize));
  return chunks;
};

const ipToInt = ip => {
  const multipliers = [256 ** 3, 256 ** 2, 256,  1];
  const ips = ip.split('.').map(e => parseInt(e));
  return ips.reduce((sum, value, index) => sum + value * multipliers[index], 0);
};

const intToIp = intIp => {
  const normalizedIp = intIp.toString(16).padStart(8, 0);
  const chunks = toChunks(normalizedIp, 2);
  return chunks.map(chunk => parseInt(chunk, 16)).join('.');
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
