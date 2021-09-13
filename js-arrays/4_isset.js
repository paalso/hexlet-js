// https://ru.hexlet.io/courses/js-arrays/lessons/isset/theory_unit

// Проверка существования значения
// ================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива
элемент по указанному индексу, если индекс существует, либо возвращает значение
по умолчанию. Функция принимает на вход три аргумента:
Массив
Индекс
Значение по умолчанию (равно null)
*/


const get = (array, index, defaultValue = null) => {
    return 0 <= index && index < array.length ? array[index] : defaultValue;
};


const cities = ['moscow', 'london', 'berlin', 'porto'];

console.log(get(cities, 1)); // 'london'
console.log(get(cities, 4)); // null
console.log(get(cities, 10, 'paris')); // 'paris'
console.log(get(cities, -1, 'oops')); // 'oops'