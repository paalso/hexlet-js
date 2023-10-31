// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/return-function/exercise_unit
// 

// JS: Функциональное программирование
// Частичное применение
// ---------------------------------------

/*
Реализуйте и экспортируйте по умолчанию функцию, которая умеет частично
применять один (второй) аргумент у переданной функции c двумя аргументами:
*/

const partialApply = (func, y) => x => func(x, y);

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);

console.log(f1(1)); // 1
console.log(f1(10)); // 100

const f2 = partialApply((a, b) => a * b, 5);
console.log(f2(2)); // 10
console.log(f2(5)); // 25
