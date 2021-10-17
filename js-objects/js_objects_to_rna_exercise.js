// https://ru.hexlet.io/challenges/js_objects_to_rna_exercise
// 

// Javascript: Преобразование DNA в RNA
// =====================================

/*
ДНК и РНК это последовательности нуклеотидов.
Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
G -> C
C -> G
T -> A
A -> U

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая
строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК
встретится "незнакомый"
нуклеотид (не являющийся одним из четырех перечисленных выше), то функция
должна вернуть null.
*/

const dnaToRna = dna => {
    const dnaToRnaTable = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    };
    const dnaItems = Object.keys(dnaToRnaTable);

    const rna = [];
    for (const e of dna) {
        if (!dnaItems.includes(e))
            return null;
        rna.push(dnaToRnaTable[e]);
    }
    return rna.join('');
};


console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null