// https://ru.hexlet.io/courses/js-arrays/lessons/big-o/exercise_unit
// https://ru.hexlet.io/code_reviews/197908

// Big O
// ======

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
два отсортированных массива и находит их пересечение без дублей
Реализовать алгоритм, сложность которого O(n + m)
*/

const getIntersectionOfSortedArrays = (array1, array2) => {
  const intersection = [];
  let i = 0;
  let j = 0;
  let size1 = array1.length;
  let size2 = array2.length;

  while (i < size1 &&  j < size2) {
    if (array1[i] === array2[j]) {
      const commomValue = array1[i];
      intersection.push(commomValue);

      while (array1[i] === commomValue && i < size1)
        i += 1;

      while (array2[j] === commomValue && j < size2)
        j += 1;
    }

    while (array1[i] < array2[j] && i < size1)
      i += 1;

    while (array2[j] < array1[i] && j < size2)
      j += 1;
  }

  return intersection;
};


console.log(getIntersectionOfSortedArrays([1,2,4,4,4,6,9,9,9], [3,3,4,4,9,9]));
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]));
console.log(getIntersectionOfSortedArrays([1,2,4,4,4], [1,2,4]));
console.log(getIntersectionOfSortedArrays([1,1,1,2,4,4,4], [1,1,2,4]));
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]));
console.log(getIntersectionOfSortedArrays([], [2])); // []-
