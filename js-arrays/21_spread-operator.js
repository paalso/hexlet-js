// https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/exercise_unit
// https://ru.hexlet.io/code_reviews/299691

// Spread-оператор и создание новых массивов
// ==========================================

/*
Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход
массив и выпрямляет его: если элементами массива являются массивы, то
flatten сводит всё к одному массиву, раскрывая один уровень вложенности.
*/

const flatten = arrays => {
    let result = [];
    for (const e of arrays) {
        if (Array.isArray(e))
            result = [...result, ...e];
        else
            result = [...result, e];
    }
    return result;
};


console.log(flatten([])); // []
console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]
console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]
