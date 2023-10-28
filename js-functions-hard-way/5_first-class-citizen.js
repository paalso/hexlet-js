// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/default-params/exercise_unit
// https://ru.hexlet.io/code_reviews/1198363

// JS: Функциональное программирование
// Объекты первого класса
// ---------------------------------------

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
три параметра:
 - Количество раз, которое нужно применить функцию к аргументу (ряд
 последовательных вызовов, где каждому следующему вызову передается
 аргумент, являющийся результатом предыдущего вызова функции)
 - Функцию для применения
 - Аргумент для применения
*/

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

