// before es6
function newFunction(name, age, country) {
  var name = name || 'miguel';
  var age = age || 32;
  var country = country || 'COL';

  console.log(name, age, country);
}

newFunction();
newFunction('Ricardo', 21);

// es6
function newFunction2(name = 'miguel', age = 32, country = 'COL') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 21);
