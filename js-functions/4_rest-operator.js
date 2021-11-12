// https://ru.hexlet.io/courses/js-functions/lessons/rest-operator/
// 




// Оператор Rest (упаковка аргументов)
// ====================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее
арифметическое всех переданных аргументов. Если функции не передать ни одного
аргумента, то она должна вернуть null. */

const average = (...args) => {
  if (args.length === 0)
    return null;
  return args.reduce((acc, e) => acc + e) / args.length;
};


console.log(average(0, 10)); // 5
console.log(average(0)); // 0
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null