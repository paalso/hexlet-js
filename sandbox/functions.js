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

// ---------------------------------------------------------------------------

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// []
