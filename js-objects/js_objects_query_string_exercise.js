// https://ru.hexlet.io/challenges/js_objects_query_string_exercise
// https://ru.hexlet.io/code_reviews/199459

// Javascript: Сборщик строки запроса
// ===================================

/*
Query String (строка запроса) - часть адреса страницы в интернете, содержащая
константы и их значения. Она начинается после вопросительного знака и идет до
конца адреса.

Пример:
# query string: page=5
https://ru.hexlet.io/blog?page=5
Если параметров несколько, то они отделяются амперсандом &:

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список
параметров и возвращает сформированный query string из этих параметров:
*/

const bqs = params => {
    const tokens = Object.entries(params).sort().map(
        ([key, val]) => `${key}=${val}`
    );
    return tokens.join('&');
};


console.log(bqs({ per: 10, page: 1 }));
// page=1&per=10
console.log(bqs({ param: 'all', param1: true }));
// param=all&param1=true

/*
# Version 2
const bqs = params => Object.entries(params)
  .sort()
  .map(([param, value]) => `${param}=${value}`)
  .join('&');
*/

