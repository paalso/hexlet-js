// https://ru.hexlet.io/courses/js-arrays/lessons/for-of/theory_unit
// https://ru.hexlet.io/code_reviews/195091

// Цикл for...of
// ==============
// Реализуйте и экспортируйте по умолчанию функцию calculateAverage,
// которая высчитывает среднее арифметическое элементов массива.

const calculateAverage = array => {
    const len = array.length;
    if (len === 0)
        return null;
    return array.reduce((acc, e) => acc + e, 0) / len;
};


const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5

const temperatures2 = [];
console.log(calculateAverage(temperatures2)); // null


// const calculateAverage = (coll) => {
//     const len = coll.length;
//     if (len === 0)
//         return null;
//     let s = 0;
//     for (const el of coll)
//         s += el;
//     return s / len;
// }