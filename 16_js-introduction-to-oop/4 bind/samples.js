const userPaul = {
  name: "Paul",
  sayHello() {
    console.log(`Hello, ${this.name}`);
  },
};

const userTom = {
  name: "Tom",
  sayHello() {
    console.log(`Hello, ${this.name}`);
  },
};

userPaul.sayHello();

const fn = userPaul.sayHello;
fn();


const fn1 = userPaul.sayHello.bind(userPaul);
fn1();

const fn2 = userPaul.sayHello.bind(userTom);
fn2();

function sumThree(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

function log(prefix, message) {
  return `[${prefix}]: ${message}`;
}

const errorLog = log.bind(undefined, 'ERROR')

("Something went wrong");