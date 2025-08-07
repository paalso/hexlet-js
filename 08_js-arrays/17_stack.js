// https://ru.hexlet.io/courses/js-arrays/lessons/stack/exercise_unit
// https://ru.hexlet.io/code_reviews/197900

// Стек
// =====
/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
строку, состоящую только из открывающих и закрывающих скобок разных типов,
и проверяет является ли эта строка сбалансированной. Пустая строка (отсутствие
    скобок) считается сбалансированной.
*/



const isBracketStructureBalanced = text => {

    const brackets = {
        ")": "(", "}": "{", "]": "[", ">": "<"
    };
    const rightBrackets = Object.keys(brackets);
    const leftBrackets = Object.values(brackets);

    const stack = [];
    for (const c of Array.from(text)) {
        if (leftBrackets.includes(c))
            stack.push(c);
        else if (rightBrackets.includes(c)) {
            const lastInStack = stack.pop();
            if (brackets[c] !== lastInStack)
                return false;
        }
    }
    return stack.length === 0;
};

console.log(isBracketStructureBalanced('[()]'));  // true
console.log(isBracketStructureBalanced('[цу(цас)сцы]выс'));  // true
console.log(isBracketStructureBalanced('{<>}}')); // false
console.log(isBracketStructureBalanced('(>'));  // false
console.log(isBracketStructureBalanced('()'));  // true
console.log(isBracketStructureBalanced('([)]')); // false