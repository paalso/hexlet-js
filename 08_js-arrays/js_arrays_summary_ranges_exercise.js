// https://ru.hexlet.io/challenges/js_arrays_summary_ranges_exercise/instance
// https://ru.hexlet.io/code_reviews/201686

// Javascript: Список диапазонов
// ==============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая находит в массиве
непрерывные возрастающие на единицу последовательности чисел и возвращает
массив с их перечислением.
*/

const summaryRanges1 = array => {
  const size = array.length;

  if (size < 2)
    return [];

  const ranges = [];
  let rangeStart;
  let insideRange = false;

  for (let i = 1; i < size; ++i) {
    if (array[i] - array[i - 1] === 1) {
      if (!insideRange)
        rangeStart = i - 1;
      insideRange = true;
      if (i === size - 1)
        ranges.push(`${array[rangeStart]}->${array[i]}`)
    } else {
      if (insideRange) {
        ranges.push(`${array[rangeStart]}->${array[i - 1]}`)
      }
      insideRange = false;
    }
  }
  return ranges;
};


const summaryRanges2 = array => {
  const ranges = [];
  let range = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    const next = array[i + 1]
    range.push(current);
    if (next - current !== 1) {
      if (range.length > 1)
        ranges.push(`${range[0]}->${range.at(-1)}`)
      range = [];
    }
  }
  return ranges;
};


const summaryRanges = summaryRanges2;
console.log(summaryRanges([]));
// []

console.log(summaryRanges([1]));
// []

console.log(summaryRanges([1, 2]));
// ['1->2']

console.log(summaryRanges([1, 2, 3]));
// ['1->3']

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ['0->2', '4->5']

// console.log([110, 111, 112, 111, 110, -5, -4, -2, -3, -4, -5]);
console.log(summaryRanges([110, 111, 112, 111, 110, -5, -4, -2, -3, -4, -5]));
// ['110->112', '-5->-4']

