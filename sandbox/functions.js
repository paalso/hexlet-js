// Одинаковая четность
const sameParity = array => {
  if (array.length === 0)
    return [];

  const parity = array[0] % 2;
  const first = array[0];
  return array.filter(e => (e - first )% 2 === 0);
};


// ---------------------------------------------------------------------------

console.log();
console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []