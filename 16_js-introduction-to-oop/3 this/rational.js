const make = (numer, denom) => ({
  numer: numer,
  denom: denom,
  setNumer(numer) {
    this.numer = numer;
  },
  setDenom(denom) {
    this.denom = denom;
  },
  getDenom() {
    return this.denom;
  },
  getNumer() {
    return this.numer;
  },
  toString() {
    return `${this.numer}/${this.denom}`;
  },
  add(other) {
    return make(
      this.numer * other.getDenom() + this.denom * other.getNumer(),
      this.denom * other.getDenom()
    );
  },
});

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
console.log(rat1.getNumer()); // 3
console.log(rat1.getDenom()); // 8
console.log(rat1.toString()); // 8

const rat2 = make(10, 3);
console.log(rat2.toString());

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
console.log(rat3.toString()); // '89/24'


const sqrt = x => x ** 0.5