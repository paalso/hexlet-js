// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/return-function/exercise_unit
// 

// JS: Функциональное программирование
// Возврат функций из функций
// ---------------------------------------

/*
Во многих языках программирования существует интересная функция flip().
Её необычность заключается в том, что единственная цель этой функции —
это преобразовать другую функцию так, чтобы порядок её аргументов был обратным.

Реализуйте и экспортируйте по умолчанию функцию, которая работает с
функциями принимающими только два аргумента.
*/

const flip = func => (x, y) => func(y, x);


// subtraction
const sub = (a, b) => a - b;
const reverseSub = flip(sub);
 
sub(5, 3); // 2
console.log(reverseSub(5, 3)); // -2

// exponentiation
const wop = flip(Math.pow);

Math.pow(1, 2); // 1
console.log(wop(1, 2)); // 2
 
Math.pow(3, 2); // 9
console.log(wop(3, 2)); // 8
