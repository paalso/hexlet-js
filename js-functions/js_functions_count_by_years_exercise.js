// https://ru.hexlet.io/challenges/js_functions_same_parity_exercise
// https://ru.hexlet.io/code_reviews/325389 

// Javascript: Счетчик одногодок
// ==============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает список
пользователей и возвращает объект, где ключ - это год рождения, а значение -
это количество мужчин, родившихся в этот год. */


const getMenCountByYear = users => users
  .filter(({ gender }) => gender === 'male')
  .reduce(
    (acc, { birthday }) => {
      const year = birthday.slice(0, 4);
      if (!acc.hasOwnProperty(year))
        acc[year] = 0;
      acc[year] += 1;
      return acc;
    }, {}
  );

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

console.log(
  getMenCountByYear(users)
);
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };


console.log(
  getMenCountByYear([])
);



