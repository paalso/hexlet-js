// https://ru.hexlet.io/challenges/js_functions_same_parity_exercise
// 

// Javascript: Одинаковая четность
// ================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив и возвращает новый, состоящий из элементов, у которых такая же чётность,
как и у первого элемента входного массива. */


const sameParity = array => {
  const firstItem = array.length ? array[0] : 0;
  return array.filter(e => (e - firstItem) % 2 === 0);
};


console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []