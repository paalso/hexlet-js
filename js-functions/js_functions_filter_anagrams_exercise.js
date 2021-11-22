// https://ru.hexlet.io/challenges/js_functions_filter_anagrams_exercise
// https://ru.hexlet.io/code_reviews/214188

// Javascript: Фильтр анаграмм
// ============================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы
слова. Функция принимает исходное слово и список для проверки (массив), а
возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы,
то возвращается пустой массив. */

const sortWord = word => word.toLowerCase().split('').sort().join('');

const areAnagrams = (word1, word2) => sortWord(word1) === sortWord(word2);

const filterAnagrams = (word, words) => {
  const sample = sortWord(word);
  return words.filter(e => areAnagrams(sample, e));
};


console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
// []


