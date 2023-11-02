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

/*
Начинать нужно исходя из этого:

If(True)('one')('two');  // one
If(False)('one')('two'); // two

Т.е. нужно придумать функцию If такую, что
If(True) - к-я также является функцией обладает таким свойством, что 
возвращает свой первый аргумент
If(False) - к-я также является функцией, в свою очередь возвращаеи свой второй
аргумент
Т.е. нужно просто сосредоточиться на функциях, которое умеют возвращать свой
первый/второй аргумент (из двух)
А If в таком случае будет тождественной функцией, к-я возвращает свой аргумент
(функцию) в неизмененом виде, тогда:
*/

const True = first => second => first;
const False = first => second => second;
const If = func => func;
// ----------------------------------------------------------------------------------
console.log();
console.log(True('one')('two'));
console.log(False('one')('two'));
console.log(If(True)('one')('two'));  // 'one'
console.log(If(False)('one')('two')); // 'two'
