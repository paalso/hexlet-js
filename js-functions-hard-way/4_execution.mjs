// https://ru.hexlet.io/courses/js-functions-hard-way/lessons/execution/exercise_unit
// 

// JS: Функциональное программирование
// Выполнение функций
// ---------------------------------------

/*
Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью
функций table, tr, td
Реализуйте и экспортируйте по умолчанию функцию, простой вызов которой:
buildHtml();
создаёт и возвращает следующий HTML:
*/

import { table, tr, td } from './tags.mjs';

const buildHtml = () => table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions'))
);

console.log(buildHtml());