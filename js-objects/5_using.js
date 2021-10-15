// https://ru.hexlet.io/courses/js-objects/lessons/using/exercise_unit
// https://ru.hexlet.io/code_reviews/198840

// Объекты в действии
// ===================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
имя сайта и возвращает информацию о нем:
*/

const getDomainInfo = siteName => {
    const colonPos = siteName.indexOf("://");
    const scheme = colonPos < 0 ? "http" : siteName.substring(0, colonPos);
    const name = colonPos < 0 ? siteName : siteName.substring(colonPos + 3);
    return { scheme, name };
};

// Если домен передан без указания протокола,
// то по умолчанию берется http
console.log(getDomainInfo('yandex.ru'));
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }


console.log(getDomainInfo('https://hexlet.io'));
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }


console.log(getDomainInfo('http://google.com'));
// {
//   scheme: 'http',
//   name: 'google.com',
// }




