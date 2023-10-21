// Хеш-таблицы
const getHash = s => {
  return s.split("").reduce(
    (a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
};

const crc32 = getHash;

const MAP_ARRAY_LEN = 29;

const make = () => [];

const hash = (string, size) => crc32(string) % size;
// For Hexlet
// const hash = (string, size) => crc32.str(string) % size; 

const set = (map, key, value) => {
  const id = hash(key, MAP_ARRAY_LEN);
  const [currentKey] = map[id] ? map[id] : [null];
  
  if (! currentKey || key === currentKey) {
    map[id] = [key, value];
    return true;
  }

  return false;
};

const get = (map, key, defaultValue = null) => {
  const id = hash(key, MAP_ARRAY_LEN);
  const [currentKey, currentValue] = map[id] ? map[id] : [null];

  if (! currentKey || key !== currentKey)
    return defaultValue;

  return currentValue;
};

// ---------------------------------------------------------------------------

const map = make();
console.log(set(map, 'key1', 'value1'));

let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"

result = get(map, 'key1');
console.log(result); // => "value1"
