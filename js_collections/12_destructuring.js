// https://ru.hexlet.io/courses/js_collections/lessons/destructuring/exercise_unit
// https://ru.hexlet.io/courses/js_collections/lessons/destructuring/exercise_unit

// JS: Коллекции 
// Дестракчеринг
// ----------------------------------------------------------------------------------

/*
  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
  список машин (в виде обычного js массива с объектами), а возвращает объект,
  в котором свойство - это год выпуска, а значение - это количество машин для
  соответствующего года.
*/

const getCarsCountByYear = data => data.
  map(({year}) => year);

  
const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

console.log(getCarsCountByYear(cars));