// https://ru.hexlet.io/courses/js-objects/lessons/nested-objects/exercise_unit
// 

// Вложенные объекты
// ==================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта
любой глубины вложенности значение по указанным ключам. Параметры:
- Исходный объект
- Цепочка ключей (массив), по которой ведётся поиск значения
В случае, когда добраться до значения невозможно, возвращается null.
*/


const get = (object, path) => {
    let current = object;
    for (const e of path) {
        if (current.hasOwnProperty(e))
            current = current[e];
        else
            return null;        
    }
    return current;
}


const data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};


console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false

/*
# Version 2
const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (! Object.hasOwn(current, key))
      return null;
    current = current[key];
  }
  return current;
};
*/
