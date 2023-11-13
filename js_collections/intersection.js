// https://ru.hexlet.io/challenges/js_collections_intersection_exercise/instance
// 

// JS: Коллекции 
// Ипытание. Пересечение массивов
// -----------------------------------------------

/*
Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение
двух массивов. Пересечение двух массивов A и B — это массив только с теми
элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.

Обратите внимание, что порядок значений в пересечении должен соответствовать
порядку появления этих значений в исходных массивах (сначала в первом
переданном массиве, потом - во втором).
*/

const intersection = (array1, array2) => {
  // const array1Set = new Set(array2);
  const array2Set = new Set(array2);
  return Array.from(new Set(array1.filter(e => array2Set.has(e))));
};


console.log(intersection([2, 1], [2, 3]));
// → [2]

console.log(intersection([3, 1, 3], [3, 3, 2]));
// → [3]

console.log(intersection(
  ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
  ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
));