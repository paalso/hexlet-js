// https://ru.hexlet.io/challenges/js_arrays_chunk_exercise
// https://ru.hexlet.io/code_reviews/198021

// Чанкование
// =================
/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
массив и число, которое задает размер чанка (куска). Функция должна вернуть
массив, состоящий из чанков указанной размерности.
*/

const chunk = (array, chunkLen) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkLen)
    chunks.push(array.slice(i, i + chunkLen));
  return chunks;
};


console.log(chunk(['a', 'b', 'c', 'd'], 2));
// [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// [['a', 'b', 'c'], ['d']]