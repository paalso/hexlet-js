// https://ru.hexlet.io/challenges/js_functions_horisontal_histogram_exercise/instance
// https://ru.hexlet.io/code_reviews/253785

// Javascript: Горизонтальная гистограмма
// =======================================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран
горизонтальную гистограмму. Функция принимает на вход количество бросков
кубика и функцию, которая имитирует бросок игральной кости (её реализовывать
не нужно). Вызов этой функции генерирует значение от 1 до 6, что
соответствует одной из граней игральной кости.

Гистограмма содержит строки, каждой из которых соответствует грань игральной
кости и количество выпадений этой грани. Результаты отображаются графически
(с помощью символов #) и в виде числового значения, за исключением случаев,
когда количество равно 0 (нулю).
*/

import _ from 'lodash';

const buildHistoLine = (number, count, fillToken='#') => {
    const line = count > 0 ? `${fillToken.repeat(count)} ${count}` : '';
    return `${number}|${line}`;
}

const play = (tries, rollDie) => {
  const rollDieResults = _.times(tries, rollDie);
  const countByResult = _.countBy(rollDieResults);
  const histoLines = [];
  for (let i = 1; i <= 6; i++) {
    const diceCounter = _.get(countByResult, String(i), 0);
    histoLines.push(buildHistoLine(i, diceCounter));
  }
console.log(histoLines.join('\n'));
};

play(100, rollDie);
// => 1|####################### 23
//    2|################## 18
//    3|############# 13
//    4|#################### 20
//    5|############ 12
//    6|############## 14

play(13, rollDie);
// => 1|
//    2|## 2
//    3|# 1
//    4|## 2
//    5|#### 4
//    6|#### 4

/*
// Hexlet's version:
export default (roundsCount, rollDie) => {
  const bar = '#';
  const numbers = _.times(roundsCount, rollDie);
  const sides = _.range(1, 7);

  const lines = sides.map((side) => {
    const count = numbers.filter((number) => number === side).length;
    const displayCount = count !== 0 ? ` ${count}` : '';
    return `${side}|${bar.repeat(count)}${displayCount}`;
  });
  const str = lines.join('\n');

  console.log(str);
};
*/

