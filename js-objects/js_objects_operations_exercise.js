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
  const allKeys = new Set([...keys1, ...keys2]);

  const diff = {};

  for (const key of allKeys) {
    if (keys1.includes(key) && ! keys2.includes(key))
      diff[key] = 'deleted';
    else if (! keys1.includes(key) && keys2.includes(key))
      diff[key] = 'added';
    else if (object1[key] === object2[key])
      diff[key] = 'unchanged';
    else
      diff[key] = 'changed';
  }

  return  diff;
}

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
