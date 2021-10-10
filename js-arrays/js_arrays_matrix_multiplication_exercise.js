// https://ru.hexlet.io/challenges/js_arrays_matrix_multiplication_exercise
// https://ru.hexlet.io/code_reviews/243961

// Javascript: Умножение матриц
// =============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы
и возвращает новую матрицу — результат их произведения.
*/

const multiply = (matrix1, matrix2) => {
    const width = matrix2[0].length;
    const height = matrix1.length;
    const sumLen = matrix1[0].length;

    const getYXelement = (y, x) => {
        let s = 0;
        for (let i = 0; i < sumLen; i++)
            s += matrix1[y][i] * matrix2[i][x];
        return s;
    };

    const resultMatrix = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++)
            row.push(getYXelement(y, x));
        resultMatrix.push(row);
    }
    return resultMatrix;
};


const matrixA = [[1, 2], [3, 2]];
const matrixB = [[3, 2], [1, 1]];

console.log(multiply(matrixA, matrixB));
// [[5, 4], [11, 8]]


const matrixC = [
    [2, 5],
    [6, 7],
    [1, 8],
];
const matrixD = [
    [1, 2, 1],
    [0, 1, 0],
];

console.log(multiply(matrixC, matrixD));
// [
//   [2, 9, 2],
//   [6, 19, 6],
//   [1, 10, 1],
// ]