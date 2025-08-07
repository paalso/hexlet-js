// https://ru.hexlet.io/challenges/js_arrays_snail_exercise
// https://ru.hexlet.io/code_reviews/245773

// Javascript: Улитка
// ===================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
матрицу и возвращает список элементов матрицы по порядку следования от левого
верхнего элемента по часовой стрелке к внутреннему. Движение по матрице
напоминает улитку:
*/


const buildSnailPath = matrix => {

    const height = matrix.length;
    if (height === 0)
        return [];

    const width = matrix[0].length;
    const elements = height * width;
    const snail = matrix[0];

    let [y, x] = [0, width - 1];
    let [ySteps, xSteps] = [height, width];
    let [yVariator, xVariator] = [1, -1];
    let counter = width;

    while (counter < elements) {
        for (let i = 1; counter < elements && i < ySteps; i++, counter++) {
            y = y + yVariator;
            snail.push(matrix[y][x]);
        }
        yVariator = -yVariator;
        ySteps -= 1;

        for (let i = 1; counter < elements && i < xSteps; i++, counter++) {
            x = x + xVariator;
            snail.push(matrix[y][x]);
        }
        xVariator = -xVariator;
        xSteps -= 1;
    }
    return snail;
}


console.log(
    buildSnailPath([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);  // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] 


console.log(
    buildSnailPath([
        [1, 2],
        [3, 4],
    ])
);   // [1, 2, 4, 3]

console.log(
    buildSnailPath([
        [1, 2],
    ])
);   // [1, 2]

console.log(
    buildSnailPath([
        [1],
    ])
);   // [1]

console.log(
    buildSnailPath([[]])
);   // []

console.log(
    buildSnailPath([])
);   // []




/*
// Решение учителя
import _ from 'lodash';

// BEGIN
// Поворачиваем матрицу против часовой стрелки
const rotate = (matrix) => _.reverse(_.zip(...matrix));

const buildSnailPath = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  const [head, ...tail] = matrix;
  return [head, buildSnailPath(rotate(tail))].flat();
};

export default buildSnailPath;
*/

