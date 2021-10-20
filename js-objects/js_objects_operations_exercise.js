// https://ru.hexlet.io/challenges/js_objects_operations_exercise/
// https://ru.hexlet.io/code_reviews/333222

// Javascript: Вычислитель различий
// ===================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта
и возвращает результат сравнения в виде объекта. Ключами результирующего
объекта будут все ключи из двух входящих объектов, а значением строка с
описанием отличий: added, deleted, changed или unchanged.

Возможные значения:

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
*/


const genDiff = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const unitedKeysSet = new Set();

  keys1.forEach(key => unitedKeysSet.add(key));
  keys2.forEach(key => unitedKeysSet.add(key));

  const diff = {};
  Array.from(unitedKeysSet).forEach(
    key => {
      if (!keys1.includes(key))
        diff[key] = "added"
      else if (!keys2.includes(key))
        diff[key] = "deleted";
      else if (object1[key] !== object2[key])
        diff[key] = "changed";
      else
        diff[key] = "unchanged";
    }
  );

  return diff;
};


console.log(
  genDiff(
    { one: 'eon', two: 'two', four: true },
    { two: 'own', zero: 4, four: true },
  )
);

  // {
  //   one: 'deleted',
  //   two: 'changed',
  //   four: 'unchanged',
  //   zero: 'added',
  // }
