// https://ru.hexlet.io/courses/js-arrays/lessons/modification/theory_unit
// https://ru.hexlet.io/code_reviews/253373

// Модификация
// ============

/*
Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний
элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
*/

const swap = array => {
    if (array.length < 2)
        return array;
    return [array[array.length - 1]].concat(array.slice(1, -1)).concat([array[0]]);
};


console.log(swap([]));  // []
console.log(swap([1])); // [1]
console.log(swap([1, 2]));  // [2, 1]
console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']

/*
// Another version
export const swap = array => {
    if (array.length === 0) return array;
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
  }
*/

/*
// Another version
const swap = array => {
  if (array.length <= 1)
    return array;
  const first = array.at(0);
  const last = array.at(-1);
  return [last, ...array.slice(1,-1), first];
}
*/

