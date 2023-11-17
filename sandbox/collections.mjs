import _ from 'lodash';
import { randomArrayFromSource, getDuration, randomStrings, asciiLetters }
  from './useful.js'

// Испытание: Найди отличия
const difference1 = (array1, array2) => array1.filter(e => !array2.includes(e));

const difference2 = (array1, array2) => {
  const set = new Set(array2);
  return array1.filter((value) => !set.has(value));
};

// Map
const difference = (set1, set2) => new Set(
  Array.from(set1).filter(e => ! set2.has(e))
);

/*
const array1 = randomArrayFromSource(_.times(10_000, Number), 10_000);
const array2 = randomArrayFromSource(_.times(5_000, Number), 5_000);
const diff = difference1(array1, array2);
const duration1 = getDuration(difference1, [array1, array2], 100);
const duration2 = getDuration(difference2, [array1, array2], 100);

console.log(`array1:\n${array1.slice(1,12)}...`);
console.log(`array2:\n${array2.slice(1,12)}...`);
console.log(`array1 size: ${array1.length}`);
console.log(`array2 size: ${array2.length}`);
console.log(`diff:\n${diff.slice(1,12)}...`);
console.log(`diff size: ${diff.length}`);
console.log(`Duration when using array2.includes:     ${duration1} ms`);
console.log(`Duration when using new Set(array2).has: ${duration2} ms`);
*/
// ----------------------------------------------------------------------------------------

// Поиск в Array vs Set
/*
const randomStrs = randomStrings(asciiLetters, 20, 25, 1_000);
const uniqStrs = new Set(randomStrs);
console.log('Random strings:');
console.log(...randomStrs.slice(0,3), '...');
console.log(`Random strings length:      ${randomStrs.length}`);
console.log(`Uniq randon strings length: ${uniqStrs.size}`);

let elementToFind = randomStrs.at(Math.floor(randomStrs.length / 2));
elementToFind = randomStrs.at(0);
elementToFind = randomStrs.at(randomStrs.length - 1);

const tries = 10_000_000;

const includes1 = (array, element) => {
  for (let i = 0; i < tries; i++) {
    array.includes(element);
  }
  return array.includes(element);
}

const includes2 = (array, element) => {
  const set = new Set(array);
  for (let i = 0; i < tries; i++) {
    set.has(element);
  }
  return set.has(element);
}

console.log(includes1(randomStrs, elementToFind));
console.log(includes2(randomStrs, elementToFind));
const checkInArrayDuration = getDuration(includes1, [randomStrs, elementToFind]);
const checkInSetDuration = getDuration(includes2, [randomStrs, elementToFind]);
console.log(`checkInArrayDuration: ${checkInArrayDuration}`);
console.log(`checkInSetDuration:   ${checkInSetDuration}`);
*/
// ----------------------------------------------------------------------------------------

const factorialGenerator = number => {
  const factorials = {0: 1};
  const inner = n => {
    if (! factorials.hasOwnProperty(n))
      factorials[n] = n * inner(n - 1);
    return factorials[n];
  };
  return inner;
};

// const n = 5;
// const factorial = factorialGenerator();
// const result = factorial(5);
// console.log(result);

// Нормализация данных
import lodash from 'lodash';
import dateFns from 'date-fns';

const { keyBy, get, find } = lodash;
const { eachDayOfInterval, format, parse } = dateFns;

const searchByDate = (data, date) => {
  for (const entry of data) {
    if (entry.date === date)
      return entry;
  }
};

const normalizeData = (data, startDate, endDate) =>
  eachDayOfInterval({start: new Date(startDate), end: new Date(endDate)})
  .map(date => {
      const reformattedDate = format(date, 'dd.MM.yyyy');
      const entry = find(data, {date: reformattedDate});
      return entry ? entry : { value: 0, date: reformattedDate };
    }
  );

const data = [
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
  { value: 38, date: '05.08.2018' },
];

const begin = '2018-08-01';
const end = '2018-08-06';

const result = normalizeData(data, begin, end);
// console.log(result);

const dates = keyBy(data, 'date');
console.log(dates);

const subResult1 = eachDayOfInterval({ start: new Date(begin), end: new Date(end) })
    .map((day) => format(day, 'dd.MM.yyyy'));
const subResult2 =
  eachDayOfInterval({ start: new Date(begin), end: new Date(end) })
    .map((day) => format(day, 'dd.MM.yyyy'))
    .map((date) => get(dates, date, { value: 0, date }));

console.log(subResult2);
