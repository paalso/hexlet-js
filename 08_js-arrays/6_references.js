// https://ru.hexlet.io/courses/js-arrays/lessons/references/theory_unit
// https://ru.hexlet.io/code_reviews/253376

// Ссылки
// =======

/*
Реализуйте и экспортируйте функцию reverse(), которая принимает на вход
массив и располагает элементы внутри него в обратном порядке.
*/

const reverse = array => {
    const size = array.length;
    for (let i = 0, halfSize = parseInt(size / 2); i < halfSize; i++) {
        [array[i], array[size - 1 - i]] = [array[size - 1 - i], array[i]];
    }
};


const empty = [];
reverse(empty);
console.log(empty);
reverse(empty);
console.log(empty);


const oneName = ['john'];
reverse(oneName);
console.log(oneName); // => ['john']
reverse(oneName);
console.log(oneName); // => ['john']


const twoNames = ['john', 'dick'];
reverse(twoNames);
console.log(twoNames); // => ['john']
reverse(twoNames);
console.log(twoNames); // => ['john']


const threeNames = ['john', 'smith', 'karl'];
reverse(threeNames);
console.log(threeNames); // => ['karl', 'smith', 'john']
reverse(threeNames);
console.log(threeNames); // => ['john', 'smith', 'karl']


const fourNames = ['john', 'smith', 'karl', 'bob'];
reverse(fourNames);
console.log(fourNames); // => ['bob, 'karl', 'smith', 'john']
reverse(fourNames);
console.log(fourNames); // => ['john', 'smith', 'karl', 'bob]
