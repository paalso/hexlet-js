// https://ru.hexlet.io/challenges/js_functions_hard_way_carrying_exercise/instance
// 

// JS: Функциональное программирование
// ---------------------------------------
// Испытание: Каррирование

/*
Реализуйте и экспортируйте по умолчанию каррированую версию функции, которая
принимает на вход три строки и возвращает новую строчку составленную из трех
входных.
*/

const concat = str1 => str2 => str3 => `${str1}${str2}${str3}`;

// ---------------------------------------------------------------------------

console.log(concat('a')('bc')('f')); // abcf