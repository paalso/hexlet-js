// https://ru.hexlet.io/courses/js-functions/lessons/reduce/exercise_unit
// https://ru.hexlet.io/code_reviews/202783

// Аггренация (кувгсу)
// ====================

/*
Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по
заданному свойству. Функция принимает аргументами массив объектов и название
свойства для группировки. Она должна возвращать объект, где ключ - это
значение по заданному свойству, а значение - массив с данными, подходящими
для группы. */


const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
];


const groupBy = (objects, property) => objects.reduce(
    (acc, item) => {
        const key = item[property];
        if (!acc.hasOwnProperty(key))
            acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {}
);

console.log(groupBy([], '')); // {}
console.log(groupBy(students, 'mark'));
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }


console.log(groupBy(students, 'class'));


/*
// Author's version
const groupBy = (objects, key) => objects.reduce((acc, object) => {
    // из каждого объекта берётся значение по ключу
    const groupName = object[key];
    // контейнером группы выступает массив
    const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
    // возвращается новый объект аккумулятора
    return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
    // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
  }, {});
  */
