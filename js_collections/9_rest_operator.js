// https://ru.hexlet.io/courses/js_collections/lessons/immutable/exercise_unit
// 

// JS: Коллекции 
// Операция rest
// ----------------------------------------------------------------------------------

/*
  Реализуйте функции select(), orderBy() используя подход без мутации состояния.
*/

// @ts-check

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...args) {
    return args.reduce(
      (acc, arg) => {
        return acc.build(this.#buildFilterPredicate(arg))
      }, this
    );
  }

  #buildFilterPredicate(arg) {
    const filters = {
      'function': coll => coll.filter(arg),
      'object': coll => coll.filter(
        e => Object.entries(arg).every(
          ([key, val]) => e[key] === val
        )
      )
    }
    return filters[typeof arg];
  }
  // END

  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }

  get length() {
    return this.getProcessedCollection().length;
  }

  toArray() {
    return this.getProcessedCollection().slice();
  }
}

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
const coll = new Enumerable(cars);

const result = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);
console.log(result.toArray());

const result1 = coll
  .where(car => car.brand === 'kia', car => car.year > 2011);
console.log(result1.toArray());

const result3 = coll.where({ brand: 'kia', model: 'sorento' });
console.log(result3.toArray());

const result4 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
console.log(result4.toArray());

const result5 = coll.where({ brand: 'kia' }, car => car.year < 2013);
console.log(result5.toArray());
