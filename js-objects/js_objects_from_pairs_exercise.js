// https://ru.hexlet.io/challenges/js_objects_from_pairs_exercise
// https://ru.hexlet.io/code_reviews/198849

// Javascript: Представление массива в виде объекта
// =================================================

/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив,
состоящий из массивов-пар и возвращает объект, полученный из этих пар.
Если при конструировании объекта попадаются совпадающие ключи, то берётся значение
из последнего массива-пары:
*/

const fromPairs = pairs => pairs.reduce(
    (acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {}
);


console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// { 'cat': 11, 'dog': 6 }

console.log(fromPairs([['fred', 30], ['barney', 40]]));
// { 'fred': 30, 'barney': 40 }