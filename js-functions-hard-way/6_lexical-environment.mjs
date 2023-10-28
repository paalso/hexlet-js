// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/lexical-environment/exercise_unit
// https://ru.hexlet.io/code_reviews/1198384

// JS: Функциональное программирование
// Лексическое окружение
// ---------------------------------------

/*
Реализуйте функцию reverse(), переворачивающую строку. В этот раз, используя
итеративный процесс. 
*/

const reverse1 = text => {
  const iter = (acc, counter) => {
    if (counter < 0)
      return acc;
    return iter(`${acc}${text[counter]}`, counter - 1)
  };
  return iter('', text.length - 1);
};

console.log(reverse(''));
console.log(reverse('hello!'));