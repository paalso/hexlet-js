// https://ru.hexlet.io/challenges/js_arrays_matrix_mirroring_exercise
// https://ru.hexlet.io/code_reviews/197338

// https://ru.hexlet.io/code_reviews/197922

// Зеркалирование матрицы
// =======================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный
массив (матрицу) и возвращает массив, изменённый таким образом, что правая
половина матрицы становится зеркальной копией левой половины, симметричной
относительно вертикальной оси матрицы.
Для простоты условимся, что матрица всегда имеет чётное количество столбцов
и количество столбцов всегда равно количеству строк - моя версия универсальна (paalso)
*/

const getMirrorMatrix = matrix => {

  const mirrorArray = array => {
    const size = array.length;
    const mid = parseInt(size / 2);
    const leftSlice = array.slice(0, mid);
    const leftSliceReversed = [...leftSlice].reverse();
    if (size % 2 === 1)
      return [...leftSlice, array[mid], ...leftSliceReversed];
    return [...leftSlice, ...leftSliceReversed]
  };

  return matrix.map(row => mirrorArray(row));

};

const m1 = getMirrorMatrix([
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
]);
console.log(m1);

const m2 = getMirrorMatrix([
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 25],
  [41, 42, 43, 44, 45],
]);
console.log(m2);

const m3 = getMirrorMatrix([
  [11],
]);
console.log(m3);

const m4 = getMirrorMatrix([
  [],
]);
console.log(m4);
