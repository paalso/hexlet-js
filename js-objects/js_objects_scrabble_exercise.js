// https://ru.hexlet.io/challenges/js_objects_operations_exercise/
// https://ru.hexlet.io/code_reviews/245430

// Javascript: Скрэббл
// ====================

/*
Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на
вход два параметра: набор символов в нижнем регистре (строку) и слово, и
проверяет, можно ли из переданного набора составить это слово. В результате
вызова функция возвращает true или false.

При проверке учитывается количество символов, нужных для составления слова,
и не учитывается их регистр.
*/


const scrabble = (symbols, word) => {
  const symbolsDict = symbols.split("").reduce(
    (acc, e) => {
      if (!acc.hasOwnProperty(e))
        acc[e] = 0;
      acc[e] += 1;
      return acc;
    }, {}
  );

  for (const c of word.toLowerCase().split("")) {
    if (!symbolsDict.hasOwnProperty(c))
      return false;
    symbolsDict[c] -= 1;
    if (symbolsDict[c] < 0)
      return false;
  }
  return true;
};


console.log(scrabble('rkqodlw', 'world')); // true
console.log(scrabble('avj', 'java')); // false
console.log(scrabble('avjafff', 'java')); // true
console.log(scrabble('', 'hexlet')); // false
console.log(scrabble('scriptingjava', 'JavaScript')); // true


/*
// Version 2
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
*/
