// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/guard-expression/exercise_unit

// JS: Функциональное программирование
// Guard Expression 
// ---------------------------------------

// Реализуйте и экспортируйте по умолчанию функцию с использованием рекурсии.

const isPalindrome = text => {
  if (text.length < 2)
    return true;
  if (text.at(0) !== text.at(-1))
    return false;
  return isPalindrome(text.slice(1,-1))
};
