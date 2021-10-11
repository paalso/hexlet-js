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

const getLongestLength = text => {
    if (text.length === 0)
      return 0;
  
    const len = text.length;
    const getLongestLengthFromCurrentPos = (pos) => {
      const uniq = [];
      for (let i = pos; i < len; i++) {
        const c = text[i];
        if (uniq.includes(c))
          return i - pos;
        uniq.push(c);
      }
      return len - pos;
    };
  
    let longestLength = 1;
    let i = 0;
    while (i < len - longestLength) {
      let currentLength = getLongestLengthFromCurrentPos(i);
      if (currentLength > longestLength)
        longestLength = currentLength;
      i += 1;
    }
    return longestLength;
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
  