// https://ru.hexlet.io/courses/js-arrays/lessons/control-statements/theory_unit
// https://ru.hexlet.io/code_reviews/196093

// Управляющие инструкции
// =======================
/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на
вход в виде массива кошелёк с деньгами и название валюты и возвращает
сумму денег указанной валюты.
Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:
Массив, содержащий купюры разных валют с различными номиналами
Наименование валюты
*/


const getTotalAmount = (money, currency) => {
    const removePos = currency.length + 1;
    return money
        .filter(e => e.startsWith(currency))
        .map(e => e.substr(removePos))
        .reduce((acc, e) => acc + parseInt(e), 0);
};


const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
console.log(getTotalAmount(money1, 'usd')); // 16

const money2 = [
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money2, 'eur')); // 135

const money3 = [
    'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money3, 'rub')); // 270



/*
// Author's version

const getTotalAmount = (money, currency) => {
  let sum = 0;

  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3);
    if (currentCurrency !== currency) {
      continue;
    }
    const denomination = Number(bill.slice(4));
    sum += denomination;
  }

  return sum;
};
*/
