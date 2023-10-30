import _ from 'lodash';
import { randomArray, getDuration } from './useful.js'

// Испытание: Найди отличия
const difference1 = (array1, array2) => array1.filter(e => !array2.includes(e));

const difference2 = (array1, array2) => {
  const set = new Set(array2);
  return array1.filter((value) => !set.has(value));
};

/*
const array1 = randomArray(_.times(10_000, Number), 10_000);
const array2 = randomArray(_.times(5_000, Number), 5_000);
const diff = difference1(array1, array2);
const duration1 = getDuration(difference1, [array1, array2], 100);
const duration2 = getDuration(difference1, [array1, array2], 100);

console.log(array1);
console.log(array2);
console.log(`diff:\n${diff.slice(1,100)}`);
console.log(`diff size: ${diff.length}`);
console.log(duration1);
console.log(duration2);
*/

