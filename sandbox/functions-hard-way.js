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

// Объекты первого класса
const apply = (times, func, arg) => {
  let result = arg ;
  for (let i = 0; i < times; i++) {
    result = func(result);
  }
  return result;
}

// Карррирование
const sum = x => y => x + y;
const True = x => y => x;
const False = x => y => y;
const If = func => func;
// ----------------------------------------------------------------------------------

console.log();
console.log(If(True)('one')('two'));
console.log(If(False)('one')('two'));
// console.log(If(true)('one')('two'));
// console.log(If(false)('one')('two'));
