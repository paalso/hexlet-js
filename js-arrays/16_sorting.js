// https://ru.hexlet.io/courses/js-arrays/lessons/sorting/exercise_unit
//  https://ru.hexlet.io/code_reviews/197367

// Сортировка массивов
// ====================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая сортирует массив
используя пузырьковую сортировку. Постарайтесь не подглядывать в текст
теории и попробуйте воспроизвести алгоритм по памяти.
*/


const bubbleSort = array => {
    let notSorted;
    do {
        notSorted = false;
        let upper = array.length - 1;
        for (let i = 0; i < upper; i++) {
            if (array[i + 1] < array[i]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                notSorted = true;
            }
        }
        upper -= 1;
    } while (notSorted);
    return array;
};



console.log(bubbleSort([])); // []
console.log(bubbleSort([3, 10, 4, 3])); // [3, 3, 4, 10])
console.log(bubbleSort([3, 10, 1, 4, 1, 3, 0, 100, 0])); // [0, 0, 1, 1, 3, 3, 4, 10, 100])
console.log(bubbleSort([1, 0])); // [0, 1])
console.log(bubbleSort([1, 1, 1])); // [1, 1, 1])