import { assert } from './useful.js';

// Guard Expression

const isPalindrome = text => {
  if (text.length < 2)
    return true;
  if (text.at(0) !== text.at(-1))
    return false;
  return isPalindrome(text.slice(1,-1))
};

// Параметры по умолчанию
const substr = (text, start=0, length=text.length) => {
  start = Math.max(start, 0);
  length = length < 0 ? 1 : length;
  const end = Math.min(text.length, start + length);
  const substrChars = [];
  for (let i = start; i < end; i++)
    substrChars.push(text[i]);
  return substrChars.join('');
};

// Выполнение функций


// Объекты первого класса

const apply = (times, func, arg) => {
  let result = arg ;
  for (let i = 0; i < times; i++) {
    result = func(result);
  }
  return result;
}

// ----------------------------------------------------------------------------------

console.log(apply(0, Math.sqrt, 4)); // 4
console.log(apply(1, Math.sqrt, 4)); // 2

console.log(apply(2, Math.sqrt, 16)); // 2
console.log(apply(3, Math.sqrt, 256)); // 2

console.log(apply(1, v => v ** 2, 3)); // 9
console.log(apply(5, v => v + 10, 3)); // 53