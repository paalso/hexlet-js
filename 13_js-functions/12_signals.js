// https://ru.hexlet.io/courses/js-functions/lessons/signals/exercise_unit
// https://ru.hexlet.io/code_reviews/203353

// Аггрегация (reduce)
// ====================

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
список емейлов, а возвращает количество емейлов, расположенных на каждом
бесплатном домене. Список бесплатных доменов хранится в константе
freeEmailDomains. */

const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];

const getFreeDomainsCount = emails => emails
  .map(e => e.split('@').at(-1))
  .filter(e => freeEmailDomains.includes(e))
  .reduce(
    (acc, e) => {
      acc[e] = (acc[e] ?? 0) + 1;
      return acc;
    }, {}
  );
const emails = [
  "info@gmail.com",
  "info@yandex.ru",
  "info@hotmail.com",
  "mk@host.com",
  "support@hexlet.io",
  "key@yandex.ru",
  "sergey@gmail.com",
  "vovan@gmail.com",
  "vovan@hotmail.com",
];

console.log(getFreeDomainsCount(emails));

// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };

/*
// Author's solution
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;
*/
