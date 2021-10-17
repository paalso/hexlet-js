// https://ru.hexlet.io/courses/js-objects/lessons/cloning/exercise_unit
// https://ru.hexlet.io/code_reviews/331053

// Клонирование (копирование)
// ===========================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
*/


const cloneDeep = (object) => {
    const result = Object.entries(object).reduce(
        (acc, [key, value]) => {
            acc[key] = typeof value === "object" ? cloneDeep(value) : value;
            return acc;
        }, {}
    );
    return result;
};


const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

// // result имеет такую же структуру, как и data
const result = cloneDeep(data);
console.log(result);

// // Но внутри другие объекты
console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey); // true



