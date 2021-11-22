// https://ru.hexlet.io/challenges/js_arrays_sum_intervals_exercise
// https://ru.hexlet.io/code_reviews/250916

// Javascript: Сумма интервалов
// =============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив интервалов и возвращает сумму всех длин интервалов. В данной задаче
используются только интервалы целых чисел от -100 до 100 , которые представлены
в виде массива. Первое значение интервала всегда будет меньше, чем второе значение.
Например, длина интервала [-100, 0] равна 100, а длина интервала [5, 5] равна 0.
Пересекающиеся интервалы должны учитываться только один раз.
*/


const sumIntervals = intervals => {
    const numToArrayId = num => num + 100;
    const array = [];
    for (let i = 0; i < 201; i++)
        array.push(0);

    for (const [begin, end] of intervals) {
        for (let i = begin; i < end; i++)
            array[numToArrayId(i)] = 1;
    }

    return array.reduce((acc, e) => acc + e, 0);
};



console.log(sumIntervals([[5, 5]])); // 0

console.log(sumIntervals([[-100, 0]])); // 100

console.log(sumIntervals([[1, 2], [11, 12]])); // 2

console.log(sumIntervals([[2, 7], [6, 6]])); // 5

console.log(sumIntervals([
    [1, 9],
    [7, 12],
    [3, 4]
])); // 11

console.log(sumIntervals([
    [1, 5],
    [-30, 19],
    [1, 7],
    [16, 19],
    [5, 100]
])); // 130



// Teacher's Version
/*
const sumIntervals = (intervals) => {
    const values = [];
    for (const [start, end] of intervals) {
      for (let i = start; i < end; i += 1) {
        if (!values.includes(i)) {
          values.push(i);
        }
      }
    }
    return values.length;
  };
  */