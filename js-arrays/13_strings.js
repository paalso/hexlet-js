// https://ru.hexlet.io/courses/js-arrays/lessons/strings/exercise_unit
// 

// Генерация строкив цикле
// =======================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое
вхождение указанных слов в предложении на последовательность $#%! и
возвращает полученную строку. 
Аргументы: (Текст, Набор стоп слов)
Словом считается любая непрерывная последовательность символов, включая
любые спецсимволы (без пробелов).
*/

const makeCensored = (sentence, stopWords) =>
    sentence.split(" ").map(word => stopWords.includes(word) ? "$#%!" : word).join(" ");


const sentence1 = 'When you play the game of thrones, you win or you die';
const result1 = makeCensored(sentence1, ['die', 'play']);
console.log(result1);
// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
console.log(result2);
// '$#%! chicken? chicken! $#%!';

/*
// BEGIN
const makeCensored = (text, stopWords) => {
    const words = text.split(' ');

    const result = [];
    for (const word of words) {
      const newWord = stopWords.includes(word) ? '$#%!' : word;
      result.push(newWord);
    }

    return result.join(' ');
};

export default makeCensored;
// END
*/