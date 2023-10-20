// https://ru.hexlet.io/courses/js-objects/lessons/merging/exercise_unit
// https://ru.hexlet.io/code_reviews/330980

// Слияние
// ========
/*
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект
данными из другого объекта по разрешенному списку ключей. Параметры:

Исходный объект
Список ключей которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью.
*/

const pick = (object, keys) => Object.entries(object).reduce(
  (acc, [key, value]) => {
    if (keys.includes(key))
      acc(key) = value;
    return acc;
  }
);

fill = (object, keys, newData) => {
  const newFilteredData = keys.length === 0 ? newData : _.pick(newData, keys);
  return Object.assign(object, newFilteredData);
}


const company = {
    name: null,
    state: 'moderating',
};

const data = {
    name: 'Hexlet',
    state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые


console.log(fill(company, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

console.log(fill(company, [], data));
  // {
  //   name: 'Hexlet',
  //   state: 'published',
  // }

