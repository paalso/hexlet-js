/**
 * Реализуйте и экспортируйте по умолчанию функцию,
 * которая ведет себя аналогично встроенной bind(obj, fn).
 *  Аргументы функции:
 * obj – объект выступающий в роли контекста
 * fn() – функция привязываемая к контексту
 * Ограничение: для реализации нельзя пользоваться только встроенной функцией bind()
 * Для решения можно использовать apply() или call()
 */

const bind =
  (obj, fn) =>
  (...args) =>
    fn.apply(obj, args);

// function bind(obj, fn) {
//   return (...args) => fn.apply(obj, args);
// }

const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

console.log(fnWithContext(3)); // 8

const fn2 = function fn(a, b) {
  return a * b + this.number;
};

const fnWithContext2 = bind(obj, fn2);

console.log(fnWithContext2(3, 7)); // 26


const printer = {
  items: [1],
  print() { 
    console.log(this);
    this.items.forEach(() => console.log(this.items))
  },
}