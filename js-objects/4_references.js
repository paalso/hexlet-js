// https://ru.hexlet.io/courses/js-objects/lessons/references/exercise_unit
// https://ru.hexlet.io/code_reviews/328149

// Ссылки
// =======
/*
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по
совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании
и возвращает true, если их структура одинаковая, и false в обратном случае.
Проверка должна проходить по свойствам name, state, website.
*/


const is = (obj1, obj2) => {
    const KEYS = ["name", "state", "website"];
    for (const key of KEYS) {
        if (obj1[key] != obj2[key])
            return false;
    }
    return true;
};

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
console.log(is(company1, company2)); // false

const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
console.log(is(company3, company4)); // true
