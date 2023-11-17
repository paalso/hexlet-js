// https://ru.hexlet.io/challenges/js_collections_data_normalization_exercise/instance
// 

// JS: Коллекции 
// Ипытание. Нормализация данных
// -----------------------------------------------

/*
Реализуйте и экспортируйте по умолчанию функцию, которая переводит входные
данные в удобный для построения графика формат.

На вход эта функция принимает массив данных. Каждая запись массива представляет
из себя объект типа { value: 14, date: '02.08.2018' }. Например:
*/

import lodash from 'lodash';
import dateFns from 'date-fns';

const { find } = lodash;
const { eachDayOfInterval, format } = dateFns;

// BEGIN (write your solution here)
const normalizeData = (data, startDate, endDate) =>
  eachDayOfInterval({ start: new Date(startDate), end: new Date(endDate) })
    .map(date => {
      const reformattedDate = format(date, 'dd.MM.yyyy');
      const entry = find(data, { date: reformattedDate });
      return entry ? entry : { value: 0, date: reformattedDate };
    }
  );
export default normalizeData;

const result = normalizeData(data, beginDate, endDate); 


// Hexlet's version
/*
import lodash from 'lodash';
import dateFns from 'date-fns';

const { keyBy, get } = lodash;
const { eachDayOfInterval, format } = dateFns;

// BEGIN
export default (data, begin, end) => {
  const dates = keyBy(data, 'date');
  const result = eachDayOfInterval({ start: new Date(begin), end: new Date(end) })
    .map((day) => format(day, 'dd.MM.yyyy'))
    .map((date) => get(dates, date, { value: 0, date }));
  return result;
};
*/