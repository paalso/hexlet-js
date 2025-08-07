// https://ru.hexlet.io/courses/js-arrays/lessons/rest-operator/exercise_unit
// https://ru.hexlet.io/code_reviews/299687

// Rest-оператор и деструктуризация
// =================================

/*
Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве
максимальное значение и возвращает его.
*/

const getMax = array => {
    if (array.length === 0)
        return null;
    let [max, ...rest] = array;
    for (const e of rest) {
        if (e > max)
            max = e;
    }
    return max;
};

console.log(getMax([]));    // null
console.log(getMax([1, 10, 8])); // 10