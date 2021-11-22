// https://ru.hexlet.io/challenges/js_functions_find_nearest_exercise
// https://ru.hexlet.io/code_reviews/204775

// Javascript: Поиск ближайшего соседа
// ====================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив чисел и искомое число. Задача функции — найти в массиве ближайшее
число к искомому и вернуть его индекс в массиве.
Если в массиве содержится несколько чисел, одновременно являющихся ближайшими
к искомому числу, то возвращается наименьший из индексов ближайших чисел. */

const findIndexOfNearest = (array, number) => {
  if (array.length === 0)
    return null;
  const dists = array.map(e => Math.abs(e - number));
  const minDist = Math.min(...dists);
  return dists.indexOf(minDist);
};


console.log(findIndexOfNearest([], 2));              // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0));  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4));    // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2