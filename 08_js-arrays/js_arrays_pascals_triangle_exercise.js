// https://ru.hexlet.io/challenges/js_arrays_pascals_triangle_exercise
// https://ru.hexlet.io/code_reviews/198593

// Треугольник Паскаля
// ====================

// Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива.

const generate = n => {
    let row = [1];
    for (let i = 1; i <= n; i++) {
        const prevRow = row;
        row = [1];
        for (let j = 1; j < i; j++)
            row.push(prevRow[j - 1] + prevRow[j]);
        row.push(1);
    }
    return row;
};


console.log(generate(0)); // [1]
console.log(generate(1)); // [1, 1]
console.log(generate(2)); // [1, 2, 1]
console.log(generate(3)); // [1, 3, 3, 1]
console.log(generate(10)); // [1, 4, 6, 4, 1]
