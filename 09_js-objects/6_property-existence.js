// https://ru.hexlet.io/courses/js-objects/lessons/property-existence/exercise_unit
// 

// Объекты в действии
// ===================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в -
предложении, и возвращает объект. В объекте свойства — это слова (приведенные к нижнему
регистру), а значения — это то, сколько раз слово встретилось в предложении. Слова
в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить
в нижний регистр, чтобы не пропускались дубли.
*/

const countWords = text => {
    if (text.length === 0)
        return {};
    return text.split(" ").reduce(
        (acc, word) => {
            word = word.toLowerCase();
            if (!acc.hasOwnProperty(word))
                acc[word] = 0;
            acc[word] += 1;
            return acc;
        }, {}
    );
};

// Если предложение пустое, то возвращается пустой объект 
console.log(countWords(''));
// {}

const text1 = 'one two three two ONE one wow';
console.log(countWords(text1));
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }