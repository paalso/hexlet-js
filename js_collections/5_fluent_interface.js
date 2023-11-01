// https://ru.hexlet.io/courses/js_collections/lessons/fluent_interface/exercise_unit
// https://ru.hexlet.io/code_reviews/269422

// JS: Коллекции 
// Fluent Interface
// ----------------------------------------------------------------------------------

/*
Реализуйте метод select(), который отображает (принцип работы как у функции map())
коллекцию, другими словами, извлекает из элементов коллекции нужные данные и
возвращает объект с новой (отображенной) коллекцией из этих данных.

Реализуйте метод orderBy(), который сортирует коллекцию на основе переданных данных.
Принимаемые параметры:
Функция, возвращающая значение, по которому будет происходить сортировка.
Направление сортировки: asc — по возрастанию, desc — по убыванию (по умолчанию — asc).
Если передан некорректный параметр, то для сортировки используется значение по умолчанию.
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  select(fn) {
    return new Enumerable(this.collection.map(fn));
  }

  orderBy(fn, direction='asc') {
    this.collection
      .sort(this.#getOrderByComparator(fn));
    if (direction === 'desc')
      this.collection.reverse();
    return this;
  }

  toArray() {
    return this.collection;
  }

  #getOrderByKeyType(fn) {
    return typeof fn(this.collection[0]);
  }

  #getOrderByComparator(fn) {
    const comparators = {
      'number': (a, b) => fn(a) - fn(b),
      'string': (a, b) => fn(a).localeCompare(fn(b)),
    };

    return comparators[this.#getOrderByKeyType(fn)];
  }
}


const cars = [
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = new Enumerable(cars);
console.log(coll);

let orderedColl = coll
  .orderBy(e => e.year, 'desc');
console.log(orderedColl);

orderedColl = coll.orderBy(e => e.brand);
console.log(orderedColl);


/*
// Hexlet's version
orderBy(fn, direction = 'asc') {
  const compareResult = direction !== 'desc' ? 1 : -1;
  const comparator = (a, b) => {
    const a1 = fn(a);
    const b1 = fn(b);

    if (a1 > b1) {
      return compareResult;
    }
    if (a1 < b1) {
      return -compareResult;
    }

    return 0;
  };
  this.collection.sort(comparator);
  return this;
}
*/
