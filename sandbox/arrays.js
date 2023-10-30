const capitalize = text => {
  if (text.length === 0 )
    return '';
  return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`
};

const normalize = (lesson) => {
  lesson.name = capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
  return lesson;
};

const getFileInfo = filepath => {
  return {
    extension: filepath.slice(filepath.lastIndexOf('.') + 1),
    filename: filepath.slice(filepath.lastIndexOf('/') + 1),
  };
};

// Сравнение версий
const sgn = (number1, number2) => {
  if (number1 < number2)
    return -1;
  if (number1 > number2)
    return 1;
  return 0;
};

const compareVersion = (version1, version2) => {
  const [major1, minor1] = version1.split('.').map(Number);
  const [major2, minor2] = version2.split('.').map(Number);
  if (major1 === major2)
    return sgn(minor1, minor2);
  return sgn(major1, major1);
};

const getDomainInfo = domain => {
  const info = {
    scheme: 'http',
  };
  if (domain.startsWith('https'))
    info.scheme = 'https';
  info.name = domain.split('//').at(-1);
  return info;
};

// Чанкование
const chunk = (array, chunkSize) => {
  const chunks = [];
  for (let chunkStart = 0; chunkStart < array.length; chunkStart += chunkSize)
    chunks.push(array.slice(chunkStart, chunkStart + chunkSize));
  return chunks;
};

const printMatrix = matrix => {
  for (const row of matrix) {
    console.log(row.join(' '));
  }
}

// Вращение матрицы
const initializeZeroMatrix = (width, height) => {
  const rotatedMatrix = [];
  for (let i = 0; i < height; i++)
    rotatedMatrix.push(Array(width).fill(0));
  return rotatedMatrix;  
}

const initializeRotatedMatrix = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const rotatedMatrix = [];
  for (let i = 0; i < width; i++)
    rotatedMatrix.push(Array(height).fill(0));
  return rotatedMatrix;  
}

const rotateLeft = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const rotatedMatrix = initializeRotatedMatrix(matrix);

  for (let x = 0; x < height; x++)
    for (let y = 0; y < width; y++)
      rotatedMatrix[width - 1 - y][x] = matrix[x][y];
  return rotatedMatrix;
};

const rotateRight = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const rotatedMatrix = initializeRotatedMatrix(matrix);

  for (let x = 0; x < height; x++)
    for (let y = 0; y < width; y++)
      rotatedMatrix[y][height - 1 - x] = matrix[x][y];
  return rotatedMatrix;
};

// Умножение матриц
const multiply1 = (matrix1, matrix2) => {
  const width = matrix2[0].length;
  const height = matrix1.length;
  const matchingSize = matrix1[0].length;
  const matrix = initializeZeroMatrix(width, height);

  const getRowColelement = (row, col) => {
    let s = 0;
    for (let i = 0; i < matchingSize; i++)
      s += matrix1[row][i] * matrix2[i][col];
    return s;
  };

  for (let row = 0; row < height; row++)
    for (let col = 0; col < width; col++)
      matrix[row][col] = getRowColelement(row, col); 

  return matrix;
};

// Список диапазонов
const summaryRanges1 = array => {
  const size = array.length;

  if (size < 2)
    return [];

  const ranges = [];
  let rangeStart;
  let insideRange = false;

  for (let i = 1; i < size; ++i) {
    if (array[i] - array[i - 1] === 1) {
      if (!insideRange)
        rangeStart = i - 1;
      insideRange = true;
      if (i === size - 1)
        ranges.push(`${array[rangeStart]}->${array[i]}`)
    } else {
      if (insideRange) {
        ranges.push(`${array[rangeStart]}->${array[i - 1]}`)
      }
      insideRange = false;
    }
  }
  return ranges;
};

// console.log(`${i} ${current} ${next} - ${range}`);
const summaryRanges2 = array => {
  const ranges = [];
  let range = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    const next = array[i + 1]
    range.push(current);
    if (next - current !== 1) {
      if (range.length > 1)
        ranges.push(`${range[0]}->${range.at(-1)}`)
      range = [];
    }
  }
  return ranges;
};

const summaryRanges = summaryRanges2;

// Сумма интервалов
const sumIntervals = intervals => {
  const values = [];
  for (const [begin, end] of intervals)
    for (let num = begin; num < end; num++)
      if (! values.includes(num))
        values.push(num);

  return values.length;
};

// Треугольник Паскаля
const getNextRow = row => {
  const nextRow = [1];
  for (let i = 1; i < row.length; i++)
    nextRow.push(row[i - 1] + row[i]);
  nextRow.push(1);
  return nextRow;
}

const generate = n => {
  if (n === 0)
    return [1];
  let row = [1];
  for (let i = 0; i < n; i++)
    row = getNextRow(row);
  return row;
};

// Морской бой
const getFieldSizes = field => {
  const height = field.length;
  const width = height > 0 ? field[0].length : 0;
  return {width, height}
}

const isValidField = field => {
  const {width, height} = getFieldSizes(field);
  const isInside = (x, y) => 0 <= x && x < width && 0 <= y && y < height;
  const isSet = (x, y) => field[y][x] !== 0;
  const hasHorizontalNeihbors = (x, y) => (isInside(y, x - 1) && isSet(x - 1, y))
                                       || (isInside(y, x + 1) && isSet(x + 1, y));

  const hasVerticalNeihbors = (x, y) => (isInside(y - 1, x) && isSet(x, y - 1))
                                     || (isInside(y + 1, x) && isSet(x, y + 1));

  const hasDiagonalNeihbors = (x0, y0) => {
    for(const [dx, dy] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
      const x = x0 + dx;
      const y = y0 + dy;
      if (isInside(x, y) && isSet(x, y))
        return true
    }
    return false;
  }

  for (let x = 0; x < width; x++)
    for (let y = 0; y < height; y++) {
      if (! field[y][x])
        continue;
      if (hasDiagonalNeihbors(x, y) 
      || (hasHorizontalNeihbors(x, y) && hasVerticalNeihbors(x, y)))
        return false;
    }

  return true;
}

const calcShipsCount = field => {
  const {width, height} = getFieldSizes(field);
  const isInside = (x, y) => 0 <= x && x < width && 0 <= y && y < height;
  const isSet = (x, y) => field[y][x] !== 0;

  const shipData = [];  
  for (let y = 0; y < height; y++)
    shipData.push(new Array(width).fill(0));
  const getShipNumber = (x, y) => shipData[y][x];
  const setShipNumber = (x, y, number) => shipData[y][x] = number;
  const checkPreviousHorizontal = (x, y) => isInside(x - 1, y) ? getShipNumber(x - 1, y) : null;
  const checkPreviousVertical = (x, y) => isInside(x, y - 1) ? getShipNumber(x, y - 1) : null;

  let shipCounter = 0;

  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      if (isSet(x, y) && ! getShipNumber(x, y)) {
        const previousNeigbourNumber = checkPreviousHorizontal(x, y)
                                    || checkPreviousVertical(x, y);
        if (previousNeigbourNumber)
          setShipNumber(x, y, previousNeigbourNumber);
        else {
          shipCounter += 1;
          setShipNumber(x, y, shipCounter);
        }
      }
    }
  // printMatrix(shipData);
  return shipCounter;
};

const isValidField1 = (battleField) => {
  for (let col = 0; col < battleField.length; col += 1) {
    for (let row = 1; row < battleField.length; row += 1) {
      if (battleField[row][col]) {
        if (battleField[row - 1][col + 1] || battleField[row - 1][col - 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

// Самая длинная подстрока
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
// ---------------------------------------------------------------------------

const field1 = 
[
  [0, 1, 0, 0],
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
];

const field2 = [[1],];

const field3 = 
[
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
];

const field4 = [];

const  field = field1;

// printMatrix(field);
// console.log();
// console.log(calcShipsCount(field));
// console.log(isValidField(field));
// console.log(isValidField1(field));


console.log(getLongestLength('')); // 0
console.log(getLongestLength('a')); // 0
console.log(getLongestLength('aa')); // 0
console.log(getLongestLength('ab')); // 0
console.log(getLongestLength('abcdeef')); // 5
console.log(getLongestLength('jabjcdel')); // 7
console.log(getLongestLength('abj')); // 7