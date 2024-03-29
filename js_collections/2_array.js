// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/return-function/exercise_unit
// 

// JS: Коллекции 
// Массив
// ---------------------------------------

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив и возвращает новый массив, полученный из исходного удалением
повторяющихся элементов:
uniq([2, 1, 2, 3]); // [2, 1, 3]
Взаимный порядок оставшихся элементов в новом массиве должен сохраняться.
*/

const uniq = array => array.filter((e, i) => array.indexOf(e) === i);

console.log(uniq([2, 1, 2, 3]));
