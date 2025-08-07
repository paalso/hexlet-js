// https://ru.hexlet.io/challenges/js_arrays_compare_versions_exercise
// https://ru.hexlet.io/code_reviews/197922

// Сравнение версий
// =================
/*
Реализуйте и экспортируйте по умолчанию функцию compareVersion, которая
сравнивает переданные версии version1 и version2. Если version1 > version2,
то функция должна вернуть 1, если version1 < version2, то - -1, если же
version1 = version2, то - 0.
Версия - это строка, в которой два числа (мажорная и минорные версии)
разделены точкой, например: 12.11. Важно понимать, что версия - это не число
с плавающей точкой, а несколько чисел не связанных между собой. Проверка на
больше/меньше производится сравнением каждого числа независимо. Поэтому
версия 0.12 больше версии 0.2.
Пример порядка версий: 0.1 < 1.1 < 1.2 < 1.11 < 13.37
*/

const compareVersion = (ver1, ver2) => {
  const [left1, right1] = ver1.split(".").map(Number);
  const [left2, right2] = ver2.split(".").map(Number);
  const compareLeft = Math.sign(left1 - left2);
  if (compareLeft !== 0)
    return compareLeft;
  return Math.sign(right1 - right2);
};

console.log(compareVersion("0.1", "0.2")); // -1
console.log(compareVersion("0.2", "0.1")); // 1
console.log(compareVersion("4.2", "4.2")); // 0