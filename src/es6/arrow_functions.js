const team = [
  {name: 'miguel', age: 32},
  {name: 'oscar', age: 21},
];

// before es6
var names = team.map(function(member) {
  return member.name
});
console.log(names);

// es6
let names2 = team.map(member => member.name);
console.log(names2);

// function definition with arrow functions
const myFunction = (name, age, country) => {
  // ...
}

// one-line function definition with arrow functions
const square = num => num ** 2;
console.log(square(2))
