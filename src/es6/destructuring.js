let person = {
  name: 'miguel',
  age: 32,
  country: 'COL',
};

// before es6
let name = person.name;
let age = person.age;
console.log(name, age);

// es6
let {name, age} = person;
console.log(name, age);
