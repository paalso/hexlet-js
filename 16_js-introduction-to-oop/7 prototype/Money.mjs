function Money(value, currency = "usd") {
  this.rates = {
    usd: 1.2,
    eur: 0.7,
  };

  this.value = value;
  this.currency = currency;

  this.getValue = function () {
    return this.value;
  };

  this.getCurrency = function () {
    return this.currency;
  };

  this.exchangeTo = function (currency) {
    if (currency === this.currency) return new Money(this.value, currency);
    const newValue = this.rates[currency] * this.value;
    return new Money(newValue, currency);
  };

  this.add = function (money) {
    if (this.currency === money.getCurrency())
      return this.addWithTheSameCurrency(money);
    return this.addWithTheSameCurrency(money.exchangeTo(this.currency));
  };

  this.addWithTheSameCurrency = function (money) {
    return new Money(this.value + money.getValue(), this.currency);
  };

  this.format = function () {
    return this.value.toLocaleString(undefined, {
      style: "currency",
      currency: this.currency,
    });
  };

  this.toString = function () {
    return `${this.value} ${this.currency}`;
  };
}

export default Money;
