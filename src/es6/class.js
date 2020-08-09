// es6
class calculator {
  constructor() {
    this.value1 = 0;
    this.value2 = 0;
  }

  sum(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
    return (this.value1 + this.value2);
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));
