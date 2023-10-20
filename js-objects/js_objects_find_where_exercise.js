// https://ru.hexlet.io/challenges/js_objects_find_where_exercise/instance
// https://ru.hexlet.io/code_reviews/200356

// Javascript: Детектирование
// ===========================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив (элементы которого — это объекты) и пары ключ-значение (тоже в виде
объекта), а возвращает первый элемент исходного массива, значения которого
соответствуют переданным парам (всем переданным). Если совпадений не было,
то функция должна вернуть null.
*/


const checkEntry = (entry, checkData) => {
  for (const [key, value] of Object.entries(checkData))
    if (! entry.hasOwnProperty(key) || entry[key] !== value)
      return false
  return true;
}

const findWhere = (entries, checkData) => {
  for (const entry of entries) {
    if (checkEntry(entry, checkData))
      return entry
  }
  return null;
};

console.log(
  findWhere(
    [
      { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
      { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
      { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
      { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
      { title: 'Still foooing', author: 'FooBar', year: 3333 },
      { title: 'Happy Foo', author: 'FooBar', year: 4444 },
    ],
    { author: 'Shakespeare', year: 1611 }
  )
);

