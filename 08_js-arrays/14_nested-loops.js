// https://ru.hexlet.io/courses/js-arrays/lessons/nested-loops/exercise_unit
// 

// Вложенные массивы
// ==================
/*
Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два
массива и возвращающую количество общих уникальных значений в обоих массивах.
*/


const getSameCount = (array1, array2) => {
  const intersection = [];
  for (const e1 of array1) {
    for (const e2 of array2) {
      if ((e1 != e2) || intersection.includes(e1))
        continue;
      intersection.push(e1);
    }
  }
  return intersection.length;
};

// Общие повторяющиеся элементы: 1, 3, 2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])); // 3

// Общие повторяющиеся элементы: 4
console.log(getSameCount([1, 4, 4], [4, 8, 4])); // 1

// Общие повторяющиеся элементы: 1, 10
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2

// Нет элементов
console.log(getSameCount([], [])); // 0

/*
// BEGIN
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = _.uniq(coll1);
  const uniqColl2 = _.uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};

export default getSameCount;
// END
*/


/*
const getSameCount = (array1, array2) => {
  const commonElements = [];
  array1.forEach(element => {
    if (array2.includes(element) && !commonElements.includes(element))
      commonElements.push(element);
  });
  return commonElements.length;
};
*/
