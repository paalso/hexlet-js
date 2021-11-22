// https://ru.hexlet.io/courses/js-functions/lessons/high-order-functions/
// https://ru.hexlet.io/code_reviews/201615

// Функции высшего порядка
// ========================

/*
Реализуйте функцию takeOldest(), которая принимает на вход список
пользователей и возвращает самых взрослых. Количество возвращаемых
пользователей задается вторым параметром, который по умолчанию равен
единице. Экспортируйте данную функцию по умолчанию. */


const takeOldest = (users, qty = 1) => {
  const compare = (user1, user2) => Date.parse(user1.birthday) - Date.parse(user2.birthday);
  return users.sort(compare).slice(0, qty);
};


const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users));
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];


