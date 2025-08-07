// https://ru.hexlet.io/courses/js-functions/lessons/paradigms/exercise_unit

// Рекурсия
// =========

/*
Последовательность, в которой begin > end, не содержит ни одного числа, т.е.
является "пустой". Вычислить сумму чисел такой последовательности не
представляется возможным, в этом случае возвращаем NaN
Сумма чисел последовательности, в которой begin === end, равна begin (или end)
*/

const sequenceSum = (begin, end) => {
  if (end < begin)
    return NaN;
  return end === begin ? begin : begin + sequenceSum(begin + 1, end);
};

console.log(sequenceSum(1, 0)); // NaN
console.log(sequenceSum(1, 1));	// 1
console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3

