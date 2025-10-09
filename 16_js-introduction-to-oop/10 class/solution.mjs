import Cart from "./Cart.mjs";

const cart = new Cart();

cart.addItem({ name: "car", price: 3 }, 5);

const expectedItems = [{ item: { name: "car", price: 3 }, count: 5 }];
console.log(expectedItems);
console.log(cart.getItems());
// cart.addItem({ name: "house", price: 10 }, 2);

// console.log(cart.getCount());
// console.log(cart.getCost());
