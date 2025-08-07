// https://ru.hexlet.io/challenges/js_arrays_longest_substring_exercise
// https://ru.hexlet.io/code_reviews/199404

// Список диапазонов
// ==================

/*
Реализуйте функцию getLongestLength() принимающую на вход строку и
возвращающую длину максимальной последовательности из неповторяющихся
символов. Подстрока может состоять из одного символа. Например в строке
qweqrty, можно выделить следующие подстроки: qwe, weqrty. Самой длинной
будет weqrty.
*/

const getLongestLength = string => {
  let maxLength = 0;
  let c;
  for (let i = 0, stringLength = string.length; i < stringLength; i++) {
    const substrChars = [string[i]];
    for (let j = i + 1; ; j++) {
      if (substrChars.includes((c = string[j])) || ! c) {
        maxLength = Math.max(maxLength, substrChars.length);
        break;
      }
      substrChars.push(c)
    }
  }
  return maxLength;
};

console.log(getLongestLength('abcdeef')); // 5
console.log(getLongestLength('jabjcdel')); // 7
console.log(getLongestLength('')); // 0



// Решение учителя
const getLongestLength1 = (str) => {
    let sequence = [];
    let maxLength = 0;
  
    // Проходимся по всем символам переданной строки.
    for (const char of str) {
      // Ищем в сформированной последовательности
      // позицию первого вхождения текущего символа.
      const index = sequence.indexOf(char);
      // Добавляем в последовательность текущий символ.
      sequence.push(char);

      console.log(char, sequence);
      if (index !== -1) {
          // Если символ в последовательности был найден,
          // значит в неё был добавлен повторяющийся символ.
          // Отсекаем все символы включая найденный.
          sequence = sequence.slice(index + 1);
        }
        console.log(sequence + "\n");
      // Получаем длину последовательности.
      const sequenceLength = sequence.length;
      if (sequenceLength > maxLength) {
        // Если длина последовательности больше чем максимальная,
        // устанавливаем новую максимальную длину.
        maxLength = sequenceLength;
      }
    }
  
    return maxLength;
  };
  
  console.log(getLongestLength1("abcab"));
  
