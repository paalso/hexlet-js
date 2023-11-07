// https://ru.hexlet.io/courses/js_collections/lessons/immutable/exercise_unit
// 

// JS: Коллекции 
// Неизменяемость
// ----------------------------------------------------------------------------------

/*
  Реализуйте функции select(), orderBy() используя подход без мутации состояния.
*/

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
    // this.memo = [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build((coll) => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'desc' ? -1 : 1;

      if (a1 > b1) {
        return compareResult;
      }

      if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build((coll) => coll.sort(comparator));
  }

  where(fn) {
    return this.build((coll) => coll.filter(fn));
  }

  // BEGIN (write your solution here)
  toArray() {
    if (this.memo) {
      // console.log('from memo');
      return this.memo;
    }

    this.collection = this.operations.reduce(
      (acc, operation) => operation(acc), this.collection
    );
    this.memo = this.collection.slice();
    this.operations = [];
    return this.memo.slice();
  }

  get length() {
    return this.toArray().length;
  }
  // END
}

const cars = [
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

/*
const coll = new Enumerable(cars);
console.log(coll);

const processedColl = coll
  .select(({model, year}) => ({model, year}))
  .where(e => e.year > 2010)
  .orderBy(e => e.year, 'asc');

console.log('Processed Coll:');
console.log(processedColl.toArray());
console.log('Original Coll:');
console.log(coll.toArray());
*/

/*
const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
const filteredColl = coll.where(n => n > 3);

console.log(filteredColl.toArray()); // [4, 5, 6]
console.log(filteredColl.toArray()); // [4, 5, 6]
*/

const coll = new Enumerable(cars);
const newColl = coll
  .where((car) => car.brand === 'kia')
  .select((car) => car.model);

const result = coll
  .where((car) => car.brand === 'kia')
  .where((car) => car.year > 2011);

const result2 = coll
  .orderBy((car) => car.year, 'asc')
  .where((car) => car.model === 'sorento');

console.log(result.length);
console.log(result2.length);

// Hexlet's version
/*
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
*/