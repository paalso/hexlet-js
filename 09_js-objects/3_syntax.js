// https://ru.hexlet.io/courses/js-objects/lessons/modifications/exercise_unit

// Модификация
// ============
/*
Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные
переданного урока. То есть приводит их к определенному виду.
На вход этой функции подается объект, описывающий собой урок курса.
В уроке содержатся два поля: имя и описание.
У некоторых уроков имя и описание могут быть в разном регистре.
Такое случается при вводе данных:..
Функция должна обновлять содержимое урока по следующим правилам:
Имя капитализируется. То есть первый символ имени становится заглавным,
остальные маленькими. Весь текст описания приводится к нижнему регистру.
*/

const capitalize = text => {
    if (text.length === 0)
        return text;
    return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;
};

const normalize = data => {
    data.name = capitalize(data.name);
    data.description = data.description.toLowerCase();
};

const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
};

normalize(lesson);
console.log(lesson);