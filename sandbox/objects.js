const getRandomInt = (min, max) =>
  min + Math.floor(Math.random() * (max - min));

const randomSample = array => array[getRandomInt(0, array.length)];

const randomArray = (source, size) => {
  const result = [];
  for (let i = 0; i < size; i++)
    result.push(randomSample(source));
  return result;
}

const randomString = (source, size) => randomArray(source, size).join('');

const generateRandomPairs = (size, maxKeySize, maxNumSize) => {
  const source = 'abcdefghijklmnopqrstuvwxyz'
  const result = [];
  for (let i = 0; i < size; i++) {
    const key = randomString(source, getRandomInt(1, maxKeySize + 1));
    const value = getRandomInt(0, maxNumSize);
    result.push([key, value]);
  }
  return result;
}

const fromPairs1 = pairs => pairs.reduce(
  (acc, [key, value]) => {
      acc[key] = value;
      return acc;
  }, {}
);

// Но так кмк лучше:
  const fromPairs2 = array => {
  const result = {};
  array.forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
};

const getDuration = (func, args, times=1) => {
  const startTime = new Date().getTime();
  for (let i = 0; i < times; i++) {
    func(...args);
  }  
  const endTime = new Date().getTime();
  return endTime - startTime;
}

// randomPairs = generateRandomPairs(1_000, 10, 100_000);
// repeats = 1_000;

// console.log(getDuration(fromPairs1, [randomPairs], 100_000));
// console.log(getDuration(fromPairs2, [randomPairs], 100_000));

const countWords = text => {
  if (! text)
    return {};
  const words = text.split(' ').map(token => token.toLowerCase());
  const histogram = words.reduce(
    (acc, word) => {
      acc[word] = (acc[word] ?? 0) + 1;
      return acc;
    }, {}
  );
  return histogram;
}


const countWords1 = text => text.split(' ')
  .map(token => token.toLowerCase())
  .reduce(
    (acc, word) => {
      acc[word] = (acc[word] ?? 0) + 1;
      return acc;
    }, {}
  );

const pick = (data, keys) => {
  const result = {};
  Object.keys(data).filter(
    key => keys.includes(key)
  ).forEach(element => {
    result[element] = data[element];
  });
  return result;
}

const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (! Object.hasOwn(current, key))
      return null;
    current = current[key];
  }
  return current;
};

const dnaToRna = dna => {
  const mapping = {G: 'C', C: 'G', T: 'A', A: 'U'};
  const dnas = Object.keys(mapping);
  const result = [];
  for (const c of dna.toUpperCase().split('')) {
    if (!dnas.includes(c))
      return null;
    result.push(mapping[c]);
  }
  return result.join(''); 
}

const compare = (str1, str2) => {
  if (str1 < str2)
    return -1;
  if (str1 > str2)
    return 1;
  return 0;
}

const bqs = params => Object.entries(params)
  .sort()
  .map(([param, value]) => `${param}=${value}`)
  .join('&');


const cloneDeep1 = object => {
  const copy = {};
  for (const [key, val] of Object.entries(object)) {
    if (typeof val == 'object')
      copy[key] = cloneDeep(val);
    else
      copy[key] = val;
  }
  return copy;
};

const cloneDeep = object => Object.entries(object).reduce(
    (acc, [key, val]) => {
      if (typeof val == 'object')
        acc[key] = cloneDeep(val);
      else
        acc[key] = val;
      return acc;
    }, {}
  );

const countLetters = letters => {
  const normalizedLetters = letters.toLowerCase().split('');
  return normalizedLetters.reduce(
    (acc, c) => {
      acc[c] = (acc[c] ?? 0) + 1;
      return acc;
    }, {}
  );
};

const scrabble = (letters, word) => {
  const normalizedLetters = letters.toLowerCase().split('');
  const lettersHistogram = countLetters(letters);
  const wordLetters = word.toLowerCase().split('');
  for (const c of wordLetters) {
    if (! normalizedLetters.includes(c) || lettersHistogram[c] == 0)
      return false;
      lettersHistogram[c] -= 1;
  } 
  return true;
}; 

const pick1 = (object, keys) => Object.entries(object).reduce(
  (acc, [key, value]) => {
    if (keys.includes(key))
      acc(key) = value;
    return acc;
  }
);

const fill = (object, keys, newData) => {
  const newFilteredData = keys.length === 0 ? newData : pick(newData, keys);
  return Object.assign(object, newFilteredData);
}

const cloneShallow = object => Object.entries(object).reduce(
  (acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {}
);

const genDiff = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const allKeys = new Set([...keys1, ...keys2]);

  const diff = {};

  for (const key of allKeys) {
    if (keys1.includes(key) && ! keys2.includes(key))
      diff[key] = 'deleted';
    else if (! keys1.includes(key) && keys2.includes(key))
      diff[key] = 'added';
    else if (object1[key] === object2[key])
      diff[key] = 'unchanged';
    else
      diff[key] = 'changed';
  }

  return  diff;
}

const make = (name, otherData) => {
  const result = {
    name,
    state: 'moderating',
    createdAt: Date.now(),
  }
  return {...result, ...otherData};
}

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

// Деструктуризация 
const getSortedNames = users => users.map(({ name }) => name).sort();

