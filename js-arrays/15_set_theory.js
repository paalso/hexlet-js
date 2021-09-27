// https://ru.hexlet.io/courses/js-arrays/lessons/set-theory/exercise_unit
// https://ru.hexlet.io/code_reviews/197346

// Теория Множеств
// ================

/*
Реализуйте и экспортируйте по умолчанию функцию countUniqChars, которая
получает на вход строку и считает, сколько символов (уникальных символов)
использовано в этой строке. Например, в строке 'yy' всего один уникальный
символ — y. А в строке '111yya!' — четыре уникальных символа: 1, y, a и !.
Задание необходимо выполнить без использования сторонних библиотек.
*/

const countUniqChars = text => {
  const uniqChars = text.split('').reduce(
    (acc, e) => acc.add(e), new Set()
  );
  return Array.from(uniqChars).length;
}


const text1 = 'yyab'; // y, a, b
console.log(countUniqChars(text1)); // 3
 
const text2 = 'You know nothing Jon Snow';
console.log(countUniqChars(text2)); // 13
 
// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
console.log(countUniqChars(text3)); // 0

