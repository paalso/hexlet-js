// useful.js
import _ from 'lodash';

export const asciiLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const asciiLowercase = 'abcdefghijklmnopqrstuvwxyz';

export const asciiUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const digits = '0123456789';

export const printable = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c'

export const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

export const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export const getDuration = (func, args, times=1) => {
  const startTime = new Date().getTime();
  for (let i = 0; i < times; i++) {
    func(...args);
  }  
  const endTime = new Date().getTime();
  return endTime - startTime;
}

export const randomArrayFromSource = (source, size) =>
  _.times(size, () => randomSample(source));

export const randomSample = array => array[_.random(0, array.length - 1)];

export const randomString = (source, size) => randomArrayFromSource(source, size).join('');

export const randomStrings = (chars, minLen, maxLen, size) => {
  if (typeof chars === 'string')
    chars = chars.split('');
  return _.times(size, () => randomString(chars, _.random(minLen, maxLen)));
}
const generateRandomPairs = (size, maxKeySize, maxNumSize) => {
  const source = 'abcdefghijklmnopqrstuvwxyz'
  const result = [];
  for (let i = 0; i < size; i++) {
    const key = randomString(source, getRandomInt(1, maxKeySize + 1));
    const value = getRandomInt(0, maxNumSize);
    result.push([key, value]);
  }
  return result;
}
