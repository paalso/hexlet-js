// const solution = (value) => {
//   {
//     this.value = value;
//     toString() {

//       return `qqq`;
//     };
//   }

//   return new Wrap(value);
// };

const solution = (value) => ({
  value,
  toString() {
    return `Value is ${this.value}`;
  },
});

console.log(solution(1) + ""); // 'Value is 1'
console.log(solution(10) + ""); // 'Value is 10'
console.log(solution("some value") + ""); // 'Value is some value'

console.log(`${solution(1) + ""}`);

w1 = new Wrap(1);
