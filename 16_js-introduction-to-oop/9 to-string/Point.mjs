export default function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

// BEGIN (write your solution here)
Point.prototype.toString = function toString() {
  return `(${this.x}, ${this.y})`;
};
// END
