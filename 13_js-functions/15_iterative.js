// https://ru.hexlet.io/courses/js-functions/lessons/iterative/theory_unit
// https://ru.hexlet.io/code_reviews/1194909

// Итеративный процесс
// =========

/*
Реализуйте тело функции smallestDivisor(), используя итеративный процесс.
Функция должна находить наименьший делитель заданного числа. Число,
передаваемое в функцию, больше нуля.

Доп. условие: делитель должен быть больше единицы, за исключением случая,
когда аргументом является единица (наименьшим делителем которой является
также единица).
*/

const smallestDivisor = number => {
  if (number === 1)
    return 1;
  const iter = counter => {
    if (number % counter === 0)
      return counter;
    return iter(counter + 1);
  }
  return iter(2);
}


console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(10)); // 2
console.log(smallestDivisor(17)); // 17

