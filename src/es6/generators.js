function* helloWorld(value) {
  if (value % 2 === 0) {
    yield 'hello';
  }
  yield 'world';
}

const helloGenerator = helloWorld(4);
console.log(helloGenerator.next().value);
console.log(helloGenerator.next().value);
console.log(helloGenerator.next().value);

const anotherHelloGenerator = helloWorld(5);
console.log(anotherHelloGenerator.next().value);
console.log(anotherHelloGenerator.next().value);
console.log(anotherHelloGenerator.next().value);
