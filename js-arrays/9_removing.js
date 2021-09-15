// https://ru.hexlet.io/courses/js-arrays/lessons/removing/theory_unit
// 

// Удаление элементов массива
// ===========================
/*
Реализуйте функцию getSameParity, которая принимает на вход массив чисел
и возвращает новый, состоящий из элементов, у которых такая же чётность,
как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.
*/

const getSameParity = array => {
  if (array.length === 0)
    return array;
  return array.filter(
    e => (e - array[0]) % 2 === 0
  );
};



console.log(getSameParity([]));        // []
console.log(getSameParity([1, 2, 3])); // [1, 3]
console.log(getSameParity([1, 2, 8])); // [1]
console.log(getSameParity([2, 2, 8])); // [2, 2, 8]
