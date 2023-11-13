// https://ru.hexlet.io/challenges/js_collections_without_exercise/instance
// https://ru.hexlet.io/code_reviews/265081

// JS: Коллекции 
// Ипытание. Исключаем лишних
// ---------------------------------------

/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
массив и элементы, которые должны отсутствовать в возвращаемом массиве.
*/
const without = (array, ...itemToExclude) => {
  const itemToExcludeSet = new Set(itemToExclude);
  return array.filter(e => !itemToExcludeSet .has(e));
}

console.log(without([2, 1, 2, 3], 1, 2, 5)); // → [3]