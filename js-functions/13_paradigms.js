// https://ru.hexlet.io/courses/js-functions/lessons/paradigms/exercise_unit
// https://ru.hexlet.io/code_reviews/387512

// Парадигиы программирования
// ===========================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение
в виде двумерного массива и возвращает массив, увеличенный в два раза. */

const enlargeArray = (image) => image.map((e) => [e, e]).flat();
const enlargeArrayImage = (image) =>
  image.map((row) => [enlargeArray(row), enlargeArray(row)]).flat();

const printMatrix = (matrix) =>
  matrix.forEach((row) => {
    console.log(row.join(""));
  });

const arr = [
  ["*", "*", "*", "*"],
  ["*", " ", " ", "*"],
  ["*", " ", " ", "*"],
  ["*", "*", "*", "*"],
];

console.log(arr);
console.log();
console.log(enlargeArrayImage(arr));

/*
const enlargeRow = row => row.map(el => [el, el]).flat();
const enlargeArrayImage = arrayImage => enlargeRow(arrayImage.map(enlargeRow));
*/
