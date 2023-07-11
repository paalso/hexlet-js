// https://ru.hexlet.io/courses/js-arrays/lessons/syntax/theory_unit

// Синтаксис
// ==========

/*
Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив
из двух элементов – названий выходных дней на английском. Функция принимает
на вход параметр – формат возврата. Всего есть два возможных значения:

'long' (по умолчанию) – массив содержит значения saturday и sunday
'short' – массив содержит значения sat и sun
*/

export const getWeekends = format => {
  if (format === 'short')
    return ['sat', 'sun'];
  return ['saturday', 'sunday'];
}


console.log(getWeekends());
console.log(getWeekends('long'));
console.log(getWeekends('short'));
