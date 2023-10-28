import _ from 'lodash';

// Чистые функции
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    console.log(i);
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrimePro = number => {
  if (number === 2)
    return true;
  if (number < 2 || number % 2 === 0)
    return false;

  for (let n = 3, limit = Math.sqrt(number); n <= limit; n += 2) {
    console.log(n);
    if (number % n === 0)
      return false;
    }
  return true;
};


// Одинаковая четность
const sameParity = array => {
  if (array.length === 0)
    return [];

  const parity = Math.abs(array[0] % 2);
  return array.filter(e => Math.abs(e % 2) === parity);
};

// Счётчик одногодок
const getMenCountByYear = users => users
  .filter(({gender}) => gender === 'male')
  .reduce(
      (acc, {birthday}) => {
        const year = birthday.slice(0, 4);
        acc[year] = (acc[year] ?? 0) + 1;
        return acc;
      }, {}
    );

// Фильтр ананрамм
const normalizeWord = word => word.toLowerCase().split('').sort().join('');

const  filterAnagrams = (word, anagrams) => {
  const normalizedWord = normalizeWord(word);
  return anagrams.filter(item => normalizeWord(item) === normalizedWord);
};

// Конвертер цветов
const hexToDecimal = hexToken => parseInt(hexToken, 16);

const hexToRgb = hex => {
  return {
    r: hexToDecimal(hex.slice(1, 3)),
    g: hexToDecimal(hex.slice(3, 5)),
    b: hexToDecimal(hex.slice(5, 7)),
  }
}

const rgbToHex = (red, green, blue) => {
  return `#${(65536 * red + 256 * green + blue).toString(16).padStart(6, '0')}`;
};

// Поиск ближайшего соседа
const findIndexOfNearest = (array, number) => {
  if (array.length === 0)
    return null;
  const distances = array.map(e => Math.abs(number - e));
  const minDisctance = Math.min(...distances);
  return distances.indexOf(minDisctance);
};

// Оператор Spread (распаковка аргументов)
const convert = (...dateItems) => dateItems
  .map(([year, month, day]) => new Date(year, month - 1, day).toDateString());

// Объекты первого класса
const run = (text) => {
  const takeLast = (text, size) => {
    if (text.length < size)
      return null;
    return text.slice(-size).split('').reverse().join('')

  }
  return takeLast(text, 4);
};

// NRZI кодирование 
const nrziBAK = signal => {
  const start = signal[0];
  signal = signal.replaceAll('|','');
  if (signal.length === 0)
    return '';
  const result = [start === '|' ? 1 : 0];
  for (let i = 1; i < signal.length; i++)
    result.push(signal[i] === signal[i - 1] ? 0: 1)
  return result.join('');
};

const nrzi = signal => signal.split('').map(
  (e, i, signal) => {
    if (e === '|')
      return '';
    return signal[i - 1] === '|' ? 1 : 0
  }
).join('');

// Переворот строки
const reverse = text => text.length === 0 ? '' : `${reverse(text.substr(1))}${text[0]}`;

// Функции высшего порядка
const takeOldest = (users, number=1) => {
  const sortedUsers = users.sort(
    (entry1, entry2) => {
      const date1 = Date.parse(entry1.birthday);
      const date2 = Date.parse(entry2.birthday);
      return Math.sign(date1 - date2);
    }
  );
  return sortedUsers.slice(0, number);
};

const getChildren = users => users.map(({children}) => children).flat();

// Рекурсия
const sequenceSum = (begin, end) => {
  if (end < begin)
    return NaN;
  return end === begin ? begin : begin + sequenceSum(begin + 1, end);
};

// Слияние словарей
const merge = (...dicts) => dicts.reduce(
  (acc, dict) => {
    Object.entries(dict).forEach(([key, val]) => {
      if (! acc.hasOwnProperty(key))
        acc[key] = [];
      if (! acc[key].includes(val))
        acc[key].push(val);
    });
    return acc;
  }, {}
);

// Фильтрация (filter) 
const getGirlFriends = users => users
  .map(({friends}) => friends)
  .flat()
  .filter(({gender}) => gender === 'female');

// Агрегация (reduce) 
const groupBy = (objects, property) => objects.reduce(
  (acc, e) => {
    const property_value = e[property];
    if (! acc.hasOwnProperty(property_value))
      acc[property_value] = [];
    acc[property_value].push(e);
    return acc;
  }, {}
);

// Сигналы
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = emails => emails
  .map(e => e.split('@').at(-1))
  .filter(e => freeEmailDomains.includes(e))
  .reduce(
    (acc, e) => {
      acc[e] = (acc[e] ?? 0) + 1;
      return acc;
    }, {}
  );

// Итеративный процесс
const smallestDivisor = number => {
  if (number === 1)
    return 1;
  const iter = counter => {
    if (number % counter === 0)
      return counter;
    return iter(counter + 1);
  }
  return iter(2);
}

// IP конвертер
const toChunks = (array, chunkSize) => {
  const chunks = [];
  for (let chunkStart = 0; chunkStart < array.length; chunkStart += chunkSize)
    chunks.push(array.slice(chunkStart, chunkStart + chunkSize));
  return chunks;
};

const ipToInt = ip => {
  const multipliers = [256 ** 3, 256 ** 2, 256,  1];
  const ips = ip.split('.').map(e => parseInt(e));
  return ips.reduce((sum, value, index) => sum + value * multipliers[index], 0);
};

const intToIp = intIp => {
  const normalizedIp = intIp.toString(16).padStart(8, 0);
  const chunks = toChunks(normalizedIp, 2);
  return chunks.map(chunk => parseInt(chunk, 16)).join('.');
};

// Горизонтальная гистограмма
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// => 1|
//    2|## 2
const buildHistoLine = (number, count, fillToken='#') => {
    const line = count > 0 ? `${fillToken.repeat(count)} ${count}` : '';
    return `${number}|${line}`;
}

const play = (tries, rollDie) => {
  const rollDieResults = _.times(tries, rollDie);
  const countByResult = _.countBy(rollDieResults);
  const histoLines = [];
  for (let i = 1; i <= 6; i++) {
    const diceCounter = _.get(countByResult, String(i), 0);
    histoLines.push(buildHistoLine(i, diceCounter));
  }
console.log(histoLines.join('\n'));
};

// Парсинг конфигурации
import { readFileSync } from 'fs';

const PREFIX = 'X_FORWARDED_';

const getForwardedVariables = content => [].concat(
  ...content
  .split('\n')
  .filter(line => line.startsWith('environment'))
  .map(line => line.slice(line.indexOf('"') + 1, -1))
  .map(line => line.split(',')))
  .filter(e => e.startsWith(PREFIX))
  .map(e => e.replaceAll(PREFIX, ''))
  .join(',');

// ---------------------------------------------------------------------------
const filename = 's1.conf';
const content = readFileSync(filename, 'utf-8');
const result = getForwardedVariables(content);
console.log(result);
