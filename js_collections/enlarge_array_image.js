// https://ru.hexlet.io/challenges/js_collections_enlarge_array_image_exercise/instance
// https://ru.hexlet.io/code_reviews/268959

// JS: Коллекции 
// Ипытание. Пересечение массивов
// -----------------------------------------------

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение
в виде двумерного массива и увеличивает его в два раза.
*/

const doubleArray = array => array.concat(array);

const doubleElements = array => array.map(e => [e, e]).flat();

const enlargeArrayImage = image => doubleElements(
  image.map(row => doubleElements(row)));

const printImage = image => {
  image.forEach(row => console.log(row.join('')));
}


const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
printImage(arr);
console.log();
printImage(enlargeArrayImage(arr));
