// https://ru.hexlet.io/challenges/js_arrays_reverse_polish_notation_exercise
// https://ru.hexlet.io/code_reviews/198181

// Обратная польская запись
// =========================
/*
Реализуйте функцию calcInPolishNotation, которая принимает массив, каждый
элемент которого содержит число или знак операции (+, -, *, /). Функция
должна вернуть результат вычисления по обратной польской записи.
*/

const calcInPolishNotation = (seq) => {

  const mathOpers = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  };
  const mathSigns = Object.keys(mathOpers);

  const stack = [];
  for (const e of seq) {
    if (mathSigns.includes(e)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = mathOpers[e](operand1, operand2);
      if (Math.abs(result) === Infinity)
        return null;
      stack.push(result);
    } else
      stack.push(e);
  }
  return stack[0];
};


console.log(calcInPolishNotation([1, 2, 3, '+', '*'])); // 5
console.log(calcInPolishNotation([7, 6, '-'])); // 1
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])); // 1
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])); // 15
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 0, '/'])); // null
console.log(calcInPolishNotation([-1, 0, '/'])); // null