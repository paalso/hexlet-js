// https://ru.hexlet.io/challenges/js_arrays_length_of_last_exercise
// https://ru.hexlet.io/code_reviews/195105

// Длина последнего слова
// =======================

/*
Реализуйте и экспортируйте по умолчанию функцию lengthOfLastWord, которая
возвращает длину последнего слова переданной на вход строки. Словом считается
любая последовательность, не содержащая пробелов.
*/

const getLastWordLength = text => {
  return text.trim().split(' ').at(-1).length;
};


console.log(lengthOfLastWord('')); // 0
console.log(lengthOfLastWord(' ')); // 0
console.log(lengthOfLastWord('man in BlacK')); // 5
console.log(lengthOfLastWord('hello, world!  ')); // 6
console.log(lengthOfLastWord('hello,   world!  ')); // 6
console.log();
console.log(lengthOfLastWord1('')); // 0
console.log(lengthOfLastWord1(' ')); // 0
console.log(lengthOfLastWord1('man in BlacK')); // 5
console.log(lengthOfLastWord1('hello, world!  ')); // 6
console.log(lengthOfLastWord('hello,   world!  ')); // 6
