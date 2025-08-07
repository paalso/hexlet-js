// https://ru.hexlet.io/courses/js-functions/lessons/spread-operator/exercise_unit
// https://ru.hexlet.io/code_reviews/202286

// Оператор Rest (упаковка аргументов)
// ====================================

/*
Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк
на английском языке. Каждая из дат представлена массивом [2001, 10, 18], в
котором первый элемент — это год, второй — месяц, и третий — число. Функция
на вход должна принимать любое количество параметров. Если в функцию ничего
не было передано, она должна вернуть пустой массив. */

const convert = (...dateArrays) => dateArrays.map(
  dateArray => (new Date(...dateArray)).toDateString()
);

console.log(convert());
// []
console.log(convert([1993, 3, 24]));
// ['Sat Apr 24 1993']
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
