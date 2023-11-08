// https://ru.hexlet.io/courses/js_collections/lessons/spread_operator/exercise_unit
// https://ru.hexlet.io/code_reviews/272450

// JS: Коллекции 
// Операция spread
// ----------------------------------------------------------------------------------

/*
  Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
    Принимает на вход список (в виде обычного js массива с объектами внутри)
    и функцию-селектор, выбирающую из каждого объекта определенное значение.
    Возвращает объект, в котором ключ - это результат применения функции
    селектора к каждому объекту в массиве, а значение - это сам объект.
*/

const objectify1 = (entries, func) => entries.reduce(
  (acc, e) => {
    acc[func(e)] = e;
    return acc;
  }, {}
);

const objectify = (entries, func) => entries.reduce(
  (acc, e) => ({...acc, [func(e)]: e}), {}
);


const cars = [
  { brand: 'bmw', model: 'm3', year: 2013 },
  { brand: 'opel', model: 'astra', year: 2014 },
  { brand: 'hyundai', model: 'accent', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2013 },
  { brand: 'kia', model: 'sportage', year: 2015 },
];

console.log(objectify(cars, car => car.model));

// {
//   accent: { brand: 'hyundai', model: 'accent', year: 2014 },
//   astra: { brand: 'opel', model: 'astra', year: 2014 },
//   m3: { brand: 'bmw', model: 'm3', year: 2013 },
//   rio: { brand: 'kia', model: 'rio', year: 2013 },
//   sportage: { brand: 'kia', model: 'sportage', year: 2015 },
// };