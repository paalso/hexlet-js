// https://ru.hexlet.io/challenges/js_objects_cloning_exercise/instance
// https://ru.hexlet.io/code_reviews/331053

// Javascript: Глубокое клонирование
// ==================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое
копирование объектов.
*/


const cloneDeep = object => Object.entries(object).reduce(
    (acc, [key, val]) => {
      if (typeof val == 'object')
        acc[key] = cloneDeep(val);
      else
        acc[key] = val;
      return acc;
    }, {}
  );


  // ---------------------------------------------------------------------------
console.log();

const data1 = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const data = data1;

const copyData = cloneDeep(data);
console.log(data);
console.log(copyData);

