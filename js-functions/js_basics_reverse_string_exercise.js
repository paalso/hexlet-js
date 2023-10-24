// https://ru.hexlet.io/challenges/js_basics_reverse_string_exercise/instance


// Переворот строки
// =================

/*
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку
задом наперед, используя рекурсию. */

const reverse = text => text.length === 0 ? '' : `${reverse(text.substr(1))}${text[0]}`;

console.log(reverse(''));
console.log(reverse('a'));
console.log(reverse('str'));    // rts
console.log(reverse('hexlet')); // telxeh

