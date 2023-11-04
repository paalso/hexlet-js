// https://ru.hexlet.io/courses/js_collections/lessons/lazy/exercise_unit
// https://ru.hexlet.io/code_reviews/270226

// JS: Коллекции 
// Ленивые вычисления 
// ----------------------------------------------------------------------------------

/*
  Реализуйте ленивую версию Enumerable. Интерфейс включает в себя следующие
  методы: select(), where(), orderBy(), toArray().
*/

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    return this.#build(collection => collection.map(fn));
  }

  where(fn) {
    return this.#build(collection => collection.filter(fn));
  }

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
    return this.#build(collection => collection.slice().sort(comparator));
  }

  toArray() {
    this.collection = this.operations.reduce(
      (acc, operation) => operation(acc), this.collection
    );
    this.operations = [];
    return this.collection;
  }

  #build(fn) {
    return new Enumerable(this.collection, this.operations.concat(fn));
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

// console.log(cars);
console.log(coll.collection);
console.log(coll.operations);
console.log();

const new_coll = coll
  .where(e => e.year > 2010)
  .select(({model, year}) => ({model, year}))
  .orderBy(e => e.year, 'asc');

console.log(new_coll.toArray());
console.log(new_coll.collection);
console.log(new_coll.operations);
