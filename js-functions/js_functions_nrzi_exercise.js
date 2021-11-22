// https://ru.hexlet.io/challenges/js_functions_nrzi_exercise
// https://ru.hexlet.io/code_reviews/204866

// NRZI кодирование
// =================

/*
NRZI код (Non Return to Zero Invertive) — один из способов линейного 
кодирования. Обладает двумя уровнями сигнала и используется для передачи
битовых последовательностей, содержащих только 0 и 1. NRZI применяется,
например, в оптических кабелях, где устойчиво распознаются только два
состояния сигнала — свет и темнота.

Принцип кодирования
При передаче логического нуля на вход кодирующего устройства передается
потенциал, установленный на предыдущем такте (то есть состояние потенциала не
меняется), а при передаче логической единицы потенциал инвертируется на
противоположный. */

const nrzi = signal => {
  if (signal === '' || signal === '|')
    return '';
  const cleared = signal.split('|').join('');
  const result = [0];
  if (signal[0] === '|')
    result[0] = 1;
  for (let i = 1, size = cleared.length; i < size; ++i)
    result.push(cleared[i] != cleared[i - 1] ? 1 : 0);
  return result.join('');
};


const signal1 = '_|¯|____|¯|__|¯¯¯';
console.log(nrzi(signal1)); // '011000110100'
console.log(nrzi(signal1) === '011000110100'); // 
console.log();

const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
console.log(nrzi(signal2)); // '110010000100111'
console.log('110010000100111'); // 
console.log(nrzi(signal2) === '110010000100111'); // 
console.log();

const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
console.log(nrzi(signal3)); // '010010000100111'
console.log(nrzi(signal3) === '010010000100111'); // 
console.log();

const signal4 = '';
console.log(nrzi(signal4)); // ''

const signal5 = '|';
console.log(nrzi(signal5)); // ''



