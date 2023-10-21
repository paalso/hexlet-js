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


// ---------------------------------------------------------------------------

console.log(summaryRanges([]));
// []

console.log(summaryRanges([1]));
// []

console.log(summaryRanges([1, 2]));
// ['1->2']

console.log(summaryRanges([1, 2, 3]));
// ['1->3']

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ['0->2', '4->5']

// console.log([110, 111, 112, 111, 110, -5, -4, -2, -3, -4, -5]);
console.log(summaryRanges([110, 111, 112, 111, 110, -5, -4, -2, -3, -4, -5]));
// ['110->112', '-5->-4']
