// https://ru.hexlet.io/challenges/js_arrays_matrix_rotation
// https://ru.hexlet.io/code_reviews/228961

// Вращение матрицы
// =================
// Реализуйте и экспортируйте функции rotateLeft и rotateRight, которые поворачивают матрицу влево (против часовой стрелки) и соответственно вправо (по часовой стрелке).

// Матрица реализована на массивах.
// Функции должны возвращать новую матрицу не изменяя исходную.

const rotateRight = matrix => {
  const rotated = [];
  for (let i = 0, height = matrix.length, width = matrix[0].length; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      row.push(matrix[height - 1 - j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

const rotateLeft = matrix => {
  const rotated = [];
  for (let i = 0, height = matrix.length, width = matrix[0].length; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      row.push(matrix[j][width - 1 - i]);
    }
    rotated.push(row);
  }
  return rotated;
};


const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

console.log(rotateRight(matrix1));
console.log(rotateLeft(matrix1));


const matrix2 = [
  [1],
];

console.log(rotateRight(matrix2));
console.log(rotateLeft(matrix2));

const matrix3 = [
  [],
];

console.log(rotateRight(matrix3));
console.log(rotateLeft(matrix3));


/*
// Version # 2

const initializeRotatedMatrix = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const rotatedMatrix = [];
  for (let i = 0; i < width; i++)
    rotatedMatrix.push(Array(height).fill(0));
  return rotatedMatrix;  
}

const rotateLeft = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const rotatedMatrix = initializeRotatedMatrix(matrix);

  for (let x = 0; x < height; x++)
    for (let y = 0; y < width; y++)
      rotatedMatrix[width - 1 - y][x] = matrix[x][y];
  return rotatedMatrix;
};

const rotateRight = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const rotatedMatrix = initializeRotatedMatrix(matrix);

  for (let x = 0; x < height; x++)
    for (let y = 0; y < width; y++)
      rotatedMatrix[y][height - 1 - x] = matrix[x][y];
  return rotatedMatrix;
};

*/


// Решение учителя
// Да, можно было и сообразить..

/*
const rotate = (matrix, direction) => {
  const rowsCount = matrix.length;
  const [firstRow] = matrix;
  const columnsCount = firstRow.length;
  const rotated = [];

  for (let row = 0; row < columnsCount; row += 1) {
    rotated[row] = [];
    for (let column = 0; column < rowsCount; column += 1) {
      rotated[row][column] = direction === 'left'
        ? matrix[column][columnsCount - row - 1]
        : matrix[rowsCount - column - 1][row];
    }
  }

  return rotated;
};

const rotateLeft = (matrix) => rotate(matrix, 'left');
const rotateRight = (matrix) => rotate(matrix, 'right');
*/
