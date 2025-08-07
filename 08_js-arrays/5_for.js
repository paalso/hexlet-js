// https://ru.hexlet.io/courses/js-arrays/lessons/for/theory_unit

// Цикл for
// =========

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив и строковой префикс, и возвращает новый массив, в котором к каждому
элементу исходного массива добавляется переданный префикс. Функция
предназначена для работы со строковыми элементами. После префикса автоматически
добавляется пробел.
*/


const addPrefix = (array, prefix) => array.map(
    e => `${prefix} ${e}`);


const names = ['john', 'smith', 'karl'];

const newNames = addPrefix(names, 'Mr');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];

console.log(names); // Старый массив не меняется!
// => ['john', 'smith', 'karl'];