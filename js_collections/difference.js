// https://ru.hexlet.io/challenges/js_collections_difference_exercise/instance
// 

// JS: Коллекции 
// Ипытание. Найди отличия
// ---------------------------------------

/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
два массива, а возвращает массив, составленный из элементов первого, которых
нет во втором.
*/
const difference = (array1, array2) => array1.filter(e => ! array2.includes(e));

console.log(difference([2, 1], [2, 3])); // → [1]