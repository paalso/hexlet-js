// https://ru.hexlet.io/challenges/js_functions_dictionaries_merge_exercise/instance
// https://ru.hexlet.io/code_reviews/253768

// Javascript: Слияние словарей
// ============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая объединяет несколько
словарей (объектов) в один общий словарь. Функция принимает любое количество
аргументов и возвращает результат в виде объекта, в котором каждый ключ
содержит список уникальных значений в виде массива. Элементы в списке
располагаются в том порядке, в котором они появляются во входящих словарях. */

const sortWord = word => word.toLowerCase().split('').sort().join('');const merge = (...dicts) => dicts.reduce(
  (acc, dict) => {
    Object.entries(dict).forEach(([key, val]) => {
      if (! acc.hasOwnProperty(key))
        acc[key] = [];
      if (! acc[key].includes(val))
        acc[key].push(val);
    });
    return acc;
  }, {}
);

console.log(merge({}, {}, {}));
// {}

console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }

console.log(merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  ));
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
