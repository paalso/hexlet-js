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


const fill = (object, keys, source) => {
    if (keys.length === 0) {
        Object.assign(object, source);
        return object;
    }
    for (const key of keys) {
        if (object.hasOwnProperty(key))
            object[key] = source[key];
    }
    return object;
};


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


//   см. версии
//   https://ru.hexlet.io/code_reviews/330980?submission_id=418898
//   https://ru.hexlet.io/code_reviews/330980?submission_id=485904
//   Они лучше!