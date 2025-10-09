import Point from "./Point.mjs";
import Segment from "./Segment.mjs";

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);

console.log(point1.toString()); // => (1, 10)

const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]

const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)]
