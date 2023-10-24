// https://ru.hexlet.io/courses/js-functions/lessons/first-class-citizen/exercise_unit
// 

// Обїекті первого класса
// =======================

/*
Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n
символов строки в обратном порядке. Количество символов передаётся в
takeLast() вторым параметром. Если передаётся пустая строка или строка
меньше необходимой длины, функция должна вернуть null. */

const run = (text) => {
  const takeLast = (text, size) => {
    if (text.length < size)
      return null;
    return text.slice(-size).split('').reverse().join('')

  }
  return takeLast(text, 4);
};


console.log(run(''));       // null
console.log(run('cb'));     // null
console.log(run('power'));  // rewo
console.log(run('hexlet')); // telx
