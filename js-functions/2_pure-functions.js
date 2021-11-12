// https://ru.hexlet.io/courses/js-functions/lessons/pure-functions/
// https://ru.hexlet.io/code_reviews/195179


// Чистые функции
// ===============

/*
Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное
число на простоту и печатает на экран yes или no. */

function isPrime(number) {
  if (number === 2)
    return true;
  if (number % 2 === 0 || number < 2)
    return false;
  for (let n = 3, upperBound = Math.sqrt(number); n <= upperBound; n += 2) {
    if (number % n === 0)
      return false;
  }
  return true;
}

const sayPrimeOrNot = number => {
  console.log(isPrime(number) ? "yes" : "no");
};


sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
sayPrimeOrNot(1); // 'no'

