// https://ru.hexlet.io/courses/js-functions/lessons/filter/exercise_unit
// 

// Фильтрация (filter)
// ====================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
список пользователей и возвращает плоский список подруг всех пользователей
(без сохранения ключей). Друзья каждого пользователя хранятся в виде массива
в ключе friends. Пол доступен по ключу gender и может принимать значения
male или female.
 */


const getGirlFriends = users =>
    users
        .map(({ friends }) => friends)
        .flat()
        .filter(({ gender }) => gender === 'female');


const users = [
    {
        name: 'Tirion',
        friends: [
            { name: 'Mira', gender: 'female' },
            { name: 'Ramsey', gender: 'male' },
        ],
    },
    { name: 'Bronn', friends: [] },
    {
        name: 'Sam',
        friends: [
            { name: 'Aria', gender: 'female' },
            { name: 'Keit', gender: 'female' },
        ],
    },
    {
        name: 'Rob',
        friends: [
            { name: 'Taywin', gender: 'male' },
        ],
    },
];

console.log(getGirlFriends(users));

  // [
  //   { name: 'Mira', gender: 'female' },
  //   { name: 'Aria', gender: 'female' },
  //   { name: 'Keit', gender: 'female' },
  // ];