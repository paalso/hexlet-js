// https://ru.hexlet.io/challenges/js_collections_findodd_exercise
// https://ru.hexlet.io/code_reviews/263459

// JS: Коллекции 
// Ипытание. Нечетное количество
// -----------------------------------------------

/*
Дан массив чисел. Каждое число в массиве встречается четное количество раз,
кроме одного.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив
чисел и возвращает число, которое встречается нечетное количество раз.
*/

const countElement = (array, element) => array
  .reduce((acc, e) => e === element ? acc + 1 : acc, 0);

const findOdd = numbers => {
  const uniqNumbers = new Set(numbers);
  for (const n of uniqNumbers) {
    if (countElement(numbers, n) % 2 === 1)
      return n;
  }
}

const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

console.log(findOdd(numbers));

// Hexlet's version
/* eslint no-bitwise: ["error", { "allow": ["^"] }] */
/*
export default (numbers) => numbers.reduce((acc, num) => acc ^ num, 0);
*/