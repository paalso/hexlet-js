// https://ru.hexlet.io/challenges/js_arrays_hamming_weight_exercise
// https://ru.hexlet.io/code_reviews/195603

// Javascript: Вес Хэмминга
// =========================

/*
Вес Хэмминга — это количество единиц в двоичном представлении числа.
Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.
*/

const hammingWeight = number => {
    let s = 0;
    while (number > 0) {
        s += number % 2;
        number = Math.floor(number / 2);
    }
    return s;
};


console.log(hammingWeight(0)); // 0
console.log(hammingWeight(4)); // 1
console.log(hammingWeight(101)); // 4


/*
// Author's Version
const hammingWeight = (num) => {
    let weight = 0;
    const digits = num.toString(2);

    for (let i = 0; i < digits.length; i += 1) {
      weight += Number(digits[i]);
    }

    return weight;
  };
  */
  
 /*
 const hammingWeight = number =>
  number.toString(2).split('').filter(e => e === '1').length;
 */
 
