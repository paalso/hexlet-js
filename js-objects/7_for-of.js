// https://ru.hexlet.io/courses/js-objects/lessons/for-of/exercise_unit
// 

// Обход свойств объекта
// ======================
/*
Реализуйте и экспортируйте функцию по умолчанию, которая формирует из
переданного объекта другой объект, включающий только указанные свойства.
Параметры:
Исходный объект
Массив имен свойств
*/

const pick = (object, properties) => {
    const result = {};
    properties.forEach(e => {
        if (object.hasOwnProperty(e))
            result[e] = object[e];
    });
    return result;
};

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

console.log(pick(data, ['user'])); // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, [])); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется 
console.log(pick(data, ['none', 'cores'])); // { cores: 4 }