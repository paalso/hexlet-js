// https://ru.hexlet.io/courses/js-arrays/lessons/aggregation/theory_unit
// https://ru.hexlet.io/code_reviews/195097

// Агрегация
// ==========
/*
Реализуйте и экспортируйте по умолчанию функцию calculateSum, которая
высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).
*/

const calculateSum = array => array
    .filter(e => e % 3 == 0)
    .reduce((acc, e) => acc + e, 0);


const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll2)); // 27

console.log(calculateSum([])); // null

/*
const calculateSum = (coll, divisor = 3) => {
    if (coll.length === 0)
      return null;
    let s = 0;
    for (const el of coll)
      if (el % divisor === 0)
        s += el;
    return s;
  }
  export default calculateSum;
*/