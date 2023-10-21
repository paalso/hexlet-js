// https://ru.hexlet.io/challenges/js_arrays_ascending_sequence_exercise
// https://ru.hexlet.io/code_reviews/250916 

// Javascript: Сумма интервалов
// =============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив интервалов и возвращает сумму всех длин интервалов. В данной задаче
используются только интервалы целых чисел от -100 до 100 , которые
представлены в виде массива. Первое значение интервала всегда будет меньше,
чем второе значение. Например, длина интервала [-100, 0] равна 100, а длина
интервала [5, 5] равна 0. Пересекающиеся интервалы должны учитываться только
один раз.
*/

const sumIntervals = intervals => {
  const values = [];
  for (const [begin, end] of intervals)
    for (let num = begin; num < end; num++)
      if (! values.includes(num))
        values.push(num);

  return values.length;
};

// ---------------------------------------------------------------------------

console.log(sumIntervals([
  [5, 5]
])); // 0

console.log(sumIntervals([
  [-100, 0]
])); // 100

console.log(sumIntervals([
  [1, 2],
  [11, 12]
])); // 2

console.log(sumIntervals([
  [2, 7],
  [6, 6]
])); // 5

console.log(sumIntervals([
  [1, 9],
  [7, 12],
  [3, 4]
])); // 11

sumIntervals([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100]
]); // 130

