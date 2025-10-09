class Cart {
  constructor() {
    this.items = [];
  }

  addItem({ name, price }, count) {
    this.items.push({ item: { name, price }, count });
  }

  getItems() {
    return JSON.parse(JSON.stringify(this.items));
  }

  getCount() {
    return this.#sum(this.items.map(({ count }) => count));
  }

  getCost() {
    return this.#sum(
      this.items.map(({ item: { price }, count }) => price * count)
    );
  }

  #sum(values) {
    return values.reduce((acc, n) => acc + n, 0);
  }
}

export default Cart;
