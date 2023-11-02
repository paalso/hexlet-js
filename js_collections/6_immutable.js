// https://ru.hexlet.io/courses/js_collections/lessons/immutable/exercise_unit
// 

// JS: Коллекции 
// Неизменяемость
// ----------------------------------------------------------------------------------

/*
  Реализуйте функции select(), orderBy() используя подход без мутации состояния.
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  where(fn) {
    return new Enumerable(this.collection.filter(fn));
  }

  select(fn) {
    return new Enumerable(this.collection.map(fn));
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
    const collectionCopy = this.collection.slice()
    collectionCopy.sort(comparator);
    return new Enumerable(collectionCopy);
  }

  toArray() {
    return this.collection;
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

const processedColl = coll
  .select(({model, year}) => ({model, year}))
  .where(e => e.year > 2010)
  .orderBy(e => e.year, 'desc');

console.log(processedColl);

console.log(coll);
