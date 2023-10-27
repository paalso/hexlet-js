import { assert } from './useful.js';

// Guard Expression

const isPalindrome = text => {
  if (text.length < 2)
    return true;
  if (text.at(0) !== text.at(-1))
    return false;
  return isPalindrome(text.slice(1,-1))
};

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
