// https://ru.hexlet.io/courses/js-arrays/lessons/destructuring/exercise_unit
// 

// Деструктуризация
// =================

/*
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит
ближайшее место к указанной точке на карте и возвращает его. Параметры функции:
- locations – массив мест на карте. Каждое место - это массив из двух элементов,
где первый элемент это название места, второй – точка на карте (массив из
двух чисел x и y). 
- point – текущая точка на карте. Массив из двух элементов-координат x и y.
*/

const getTheNearestLocation = (locations, point) => {
    if (locations.length == 0)
        return null;

    const distanceBetweenPoints = (point1, point2) => {
        const [x1, y1] = point1;
        const [x2, y2] = point2;
        return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
    };

    const dists = locations.map(([place, p]) => distanceBetweenPoints(p, point));
    const minDist = Math.min(...dists);
    const nearestId = dists.indexOf(minDist);
    return locations[nearestId];
};


const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
console.log(getTheNearestLocation([], currentPoint)); // null
console.log(getTheNearestLocation(locations, currentPoint)); // ['Museum', [8, 4]]





