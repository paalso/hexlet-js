// useful.js

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

export const randomArray = (source, size) => {
  const result = [];
  for (let i = 0; i < size; i++)
    result.push(randomSample(source));
  return result;
}

const getRandomInt = (min, max) =>
  min + Math.floor(Math.random() * (max - min));

const randomSample = array => array[getRandomInt(0, array.length)];
