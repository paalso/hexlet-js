import Point from "./Point.mjs";
import Segment from "./Segment.mjs";

// BEGIN (write your solution here)
const reverse = (segment) => {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();

  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());

  return new Segment(newBeginPoint, newEndPoint);
};

const reverse1 = (segment) =>
  new Segment(segment.getEndPoint(), segment.getBeginPoint());
// END

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);
// console.log(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
console.log(
  segment.beginPoint.x,
  segment.beginPoint.y,
  segment.endPoint.x,
  segment.endPoint.y
); // => 1 10 11 -3

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y
); // => 11 -3 1 10
