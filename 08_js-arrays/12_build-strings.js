// https://ru.hexlet.io/courses/js-arrays/lessons/build-strings/theory_unit/
// https://ru.hexlet.io/code_reviews/197010?submission_id=567084

// Генерация строкив цикле
// =======================
/*
Реализуйте функцию buildDefinitionList(), которая генерирует HTML список
определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку.
При отсутствии элементов в массиве функция возвращает пустую строку.
*/


const buildDefinitionList = definitions => {
  if (definitions.length === 0)
    return '';
  const definitionsString = definitions
    .map(([dt, dd]) => `<dt>${dt}</dt><dd>${dd}</dd>`)
    .join('');
  return `<dl>${definitionsString}</dl>`
};


const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

console.log(buildDefinitionList(definitions));
  // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
