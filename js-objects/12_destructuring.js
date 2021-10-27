// https://ru.hexlet.io/courses/js-objects/lessons/destructuring/theory_unit
// https://ru.hexlet.io/code_reviews/201054

// Деструктуризация
// =================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список
пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает
отсортированный список имен.
*/


const getSortedNames = users => users.map(({ name }) => name).sort();

const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
