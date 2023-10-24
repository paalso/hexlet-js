// https://ru.hexlet.io/challenges/js_functions_rgb_hex_conversion_exercise
// https://ru.hexlet.io/code_reviews/214602

// Javascript: Счетчик одногодок
// ==============================

/*
При работе с цветами часто нужно получить отдельные значения красного,
зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и
наоборот. Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(),
которые возвращают соответствующие представление цвета. */

const hexToRgb = hex => {
  const [r, g, b] = [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)]
    .map(hexNum => parseInt(hexNum, 16));
  return { r, g, b };
};

const rgbToHex = (...rgb) => {
  return '#' + rgb.map(decimal => decimal.toString(16).padStart(2, 0)).join('');
};


console.log(hexToRgb('#24ab00'));   // { r: 36, g: 171, b: 0 }
console.log(rgbToHex(36, 171, 0));  // '#24ab00'


// Version 2
/*
const hexToDecimal = hexToken => parseInt(hexToken, 16);

const hexToRgb = hex => {
  return {
    r: hexToDecimal(hex.slice(1, 3)),
    g: hexToDecimal(hex.slice(3, 5)),
    b: hexToDecimal(hex.slice(5, 7)),
  }
}

const rgbToHex = (red, green, blue) => {
  return `#${(65536 * red + 256 * green + blue).toString(16).padStart(6, '0')}`;
};
*/
