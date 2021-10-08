// https://ru.hexlet.io/challenges/js_arrays_summary_ranges_exercise
// https://ru.hexlet.io/code_reviews/201686

// Список диапазонов
// ==================

/*
Реализуйте функцию summaryRanges, которая находит в массиве непрерывные
возрастающие последовательности чисел и возвращает массив с их перечислением.
*/

const summaryRanges = array => {
    const ranges = [];

    if (array.length === 0)
        return ranges;

    const len = array.length;
    let rangeLen = 1;
    let isRange = false;

    array.push(array[len - 1]);

    for (let i = 1; i <= len; i++) {
        if (array[i] - array[i - 1] === 1) {
            isRange = true;
            rangeLen += 1;
        } else if (isRange === true) {
            isRange = false;
            ranges.push(`${array[i - rangeLen]}->${array[i - 1]}`);
            rangeLen = 1;
        }
    }
    array.pop();
    return ranges;
};



console.log(summaryRanges([])); // []

console.log(summaryRanges([1])); // []

console.log(summaryRanges([1, 2, 3])); // ['1->3']

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ['0->2', '4->5']

console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])); // ['110->112', '-5->-4'])

