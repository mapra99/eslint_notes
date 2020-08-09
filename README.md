# Curso de ECMAScript 6+

## Qué es ECMAScript

Es la especificación de lenguaje propuesto por ECMA Inernacional. En terminos practicos, cada estándar producido por ECMA marca una "versión" sobre el uso de Javascript. ECMA ha lanzado versiones desde 1996 hasta ahora. Tuvo un estanque entre 1999 y 2001

### Default Params

ES6 implementó una forma de agregar valores por defecto a argumentos en funciones cuando estas no reciben ningún valor al ser invocadas.

```javascript
// before es6
function newFunction(name, age, country) {
  var name = name || 'miguel';
  var age = age || 32;
  var country = country || 'COL';

  console.log(name, age, country);
}

// es6
function newFunction2(name = 'miguel', age = 32, country = 'COL') {
  console.log(name, age, country);
}
```

## Qué hay de nuevo en ES6?

### Template Literals

Sirve para concatenar elementos en strings, usando `${}`.

```javascript
let hello = 'Hello';
let world = 'World';

// before es6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase);
```

### Multiline

Usando ` para delimitar strings, se pueden agregar multiples lineas dentro del string.

```javascript
// before es6
let lorem = "Ipsum dolor cupidatat quis proident aute sunt culpa enim duis veniam \n" 
          + "Dolore nostrud eu voluptate culpa ea ipsum ad quis irure minim do ipsum eu.";

console.log(lorem);

// es6
let lorem2 = `Mollit reprehenderit reprehenderit Lorem dolore.
Consequat dolor fugiat duis quis velit excepteur eu dolor reprehenderit occaecat aute elit ad consectetur.`;

console.log(lorem2);
```

### Propagation operator

 ```javascript
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// before es6
let allTeam = [];
team1.forEach(function (teamMember) {allTeam.push(teamMember)});
team2.forEach(function (teamMember) {allTeam.push(teamMember)});
console.log(allTeam);

// es6
let allTeam2 = [...team1, ...team2];
console.log(allTeam2);
 ```

### LET and CONST variables

Antes de ES6, sólo se declaraban variables con `var`. `let` es como `var`, salvo que se define unicamente dentro del scope del bloque en el que se encuentra, mientras que `var` es global.

```javascript
// Variables defined with var are available globally in all scopes
{
  var globalVar = "Global var";
  console.log(globalVar);
}
console.log(globalVar);

// Variables defined with let are available only in their own scope
{
  let globalLet = "Global let";
  console.log(globalLet);
}
console.log(globalLet); // will raise an exception

```

`const` lo que hace es proteger a la variable para no permitir que sea sobreescrita.

```javascript
// Variables defined with const won't change
const a = "a";
a = "b"; // will raise an exception

const arr = ["hello"]
arr.push("world") // this will work since arr is still an array
arr = {hello: "world"} // this will raise an exception
```

### Destructuración

```javascript
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
```

### Arrow Functions

```javascript
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
```

### Class Syntax

ES6 ofrece una forma clara para declarar clases y usar OOP en javascript.

```javascript
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
```

### Modules

ES6 ofrece una forma de importar y exportar código entre archivos, usando `import` y `export`.

Si se tiene un archivo `module_example.js` con el siguiente contenido:

```javascript
// module_example.js
const hello = () => {
  return 'hello!';
};

export default hello;
```

Se puede importar la función `hello` en otro archivo así:

```javascript
import hello from './module_example';
hello();
```

### Generadores

Los generators son funciones especiales que retornan una serie de valores según el algoritmo definido.

```javascript
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
```

