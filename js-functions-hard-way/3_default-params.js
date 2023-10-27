// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/default-params/exercise_unit


// JS: Функциональное программирование
// Параметры по умолчанию
// ---------------------------------------

// Реализуйте и экспортируйте по умолчанию функцию с использованием рекурсии.

import { assert } from './useful.js';

const substr = (text, start=0, length=text.length) => {
  start = Math.max(start, 0);
  length = length < 0 ? 1 : length;
  const end = Math.min(text.length, start + length);
  const substrChars = [];
  for (let i = start; i < end; i++)
    substrChars.push(text[i]);
  return substrChars.join('');
};

// ----------------------------------------------------------------------------------
assert(substr('abba', 0, 1) === 'a');
assert(substr('abba', 1, 2) === 'bb');
assert(substr('abba', -10, 2) ===  'ab');
assert(substr('abba', -1, 100) === 'abba');
assert(substr('abba', -1, -1) === 'a');
assert(substr('abba', 1, -10) === 'b');
assert(substr('abba', 1, 10) === 'bba');
assert(substr('abba', 1, 0) === '');
assert(substr('abba', 100, 3) === '');
