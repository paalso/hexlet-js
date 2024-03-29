// https://ru.hexlet.io/courses/js_collections/lessons/map/exercise_unit
// 

// JS: Коллекции 
// Map
// ---------------------------------------

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
два параметра: список слов и список стоп-слов. Задача функции вернуть объект
типа Map, содержащий в себе частоту переданных слов. То есть, ключами являются
сами слова, а значениями число повторений.
  Слова могут быть в разных регистрах, а подсчет должен работать без учета
  регистра. Соответственно в результирующем наборе слова должны быть
  представлены в нижнем регистре.
  Порядок слов в выходе должен совпадать с порядком появления новых слов во
  входном наборе.
  stopWords – это список стоп-слов, которые не должны попадать в
  результирующую структуру. Стоп-слова указываются в нижнем регистре.
*/

const wordsCount = (words, stopWords) => {
  return words
    .map(word => word.toLowerCase())
    .filter(word => ! stopWords.includes(word))
    .reduce(
      (acc, word) => acc.set(word, (acc.get(word) ?? 0) + 1),
      new Map()
    );
};


const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
console.log(wordsCount(words, stopWords));
// [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]
