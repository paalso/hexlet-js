// https://ru.hexlet.io/courses/js-objects/lessons/spread-operator/exercise_unit
// https://ru.hexlet.io/code_reviews/331342

// spread и создание новых объектов
// =================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая создает объект
компании и возвращает его. Для создания компании обязательно только одно
свойство – имя компании. Остальные свойства добавляются только если они есть.
Параметры:
- Имя
- Объект с дополнительными свойствами

Также у компаний есть два свойства со значениями по умолчанию:
- state – moderating
- createdAt – текущая дата
*/


const make = (name, otherInfo = null) => {
    const defaultData = {
        state: "moderating",
        createdAt: Date.now()
    };

    return { name, ...defaultData, ...otherInfo };
};


const company1 = make('Hexlet');
console.log(company1);
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(company2);
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }


// const company3 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// console.log(company3);
