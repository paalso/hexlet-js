// https://ru.hexlet.io/courses/js-arrays/lessons/big-o/exercise_unit
// https://ru.hexlet.io/code_reviews/197908

// Big O
// ======

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
два отсортированных массива и находит их пересечение.
*/

const getIntersectionOfSortedArrays = (coll1, coll2) => {
    let id1 = 0;
    let id2 = 0;
    const len1 = coll1.length;
    const len2 = coll2.length;
    const intersection = [];

    while (id1 < len1 && id2 < len2) {
        if (coll1[id1] < coll2[id2])
            id1 += 1;
        else if (coll2[id2] < coll1[id1])
            id2 += 1;
        else {
            intersection.push(coll1[id1]);
            id1 += 1;
            id2 += 1;
        }
    }
    return intersection;
};


console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]
console.log(getIntersectionOfSortedArrays([], [2])); // []
console.log(getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21])); // [10]
console.log(getIntersectionOfSortedArrays([10, 13, 14, 18, 24, 30], [10, 11, 24])); // [10, 24]