# Curso de ECMAScript 6+

[TOC]

## Qué es ECMAScript

Es la especificación de lenguaje propuesto por ECMA Inernacional. En terminos practicos, cada estándar producido por ECMA marca una "versión" sobre el uso de Javascript. ECMA ha lanzado versiones desde 1996 hasta ahora. Tuvo un estanque entre 1999 y 2001

## Qué hay de nuevo en ES6?

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

## Qué hay de nuevo en ES7?

ES7 se publicó en junio de 2016

### includes

Sirve para saber si hay un elemento dentro de un array

```javascript
let numbers = [1, 2, 4, 2, 5, 7, 8, 10];

// es7
console.log(numbers.includes(7));
console.log(numbers.includes(0));
```

### Operador de potencia

Introdujeron el `**` como operador de potencia

```javascript
// es7
let base = 4;
let exponent = 3;
let result = base ** exponent; // ** is the operator that was included in es7
console.log(result);
```

## Qué hay de nuevo en ES8?

ES8 se publicó en junio de 2017

### Object Entries

Permite obtener un objeto como matriz

```javascript
const data = {
  fronend: 'Oscar',
  backend: 'Miguel',
  design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
```

### Object Values

Permite extraer los valores de un objeto

```javascript
const data = {
  fronend: 'Oscar',
  backend: 'Miguel',
  design: 'Ana',
};

const values = Object.values(data);
console.log(values);
```

### String Padding

```javascript
// es8
const string = 'hello';
console.log(string.padStart(8, '-'));
console.log(string.padEnd(8, '-'));
```

### async/await

```javascript
const helloPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      setTimeout(() => resolve("Hey! All good"), 3000);
    } else {
      reject(new Error("Error :/"));
    }
  });
};

// es8
const helloAsync = async (number) => {
  try {
    const hello = await helloPromise(number);
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

helloAsync(2);
helloAsync(3);
```

## Qué hay de nuevo en ES9?

### Operador de reposo

 ```javascript
const data = {
  frontend: 'Oscar',
  backend: 'Miguel',
  design: 'Ana',
};

let {frontend, ...all} = data;
console.log(frontend, all);
 ```

### Multiple propagation

```javascript
const data = {
  frontend: 'Oscar',
  backend: 'Miguel',
};

const data2 = {
  ...data,
  design: 'Ana',
};
```

### Promise.finally

```javascript
const helloPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("Hey! All good")
    } else {
      reject("Error :/")
    }
  });
};

helloPromise(3)
  .then(response => console.log(response))
  .then(() => console.log("something after promise finished"))
  .catch(error => console.error(error))
  .finally(result => console.log("anyway this is always printed"))

helloPromise(4)
  .then(response => console.log(response))
  .then(() => console.log("something after promise finished"))
  .catch(error => console.error(error))
  .finally(() => console.log("anyway this is always printed"))
```

## Qué hay de nuevo en ES10?

### Array flat

```javascript
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array);
console.log(array.flat(1));
console.log(array.flat(2));
```

### String trimming

```javascript
let string = '               hello world      ';

console.log(string);
console.log(string.trimStart());
console.log(string.trimEnd());
console.log(string.trimStart().trimEnd());
```

### Object.fromEntries

```javascript
let entries = [["name", "Miguel"], ["age", 33]];

let myObject = Object.fromEntries(entries);
console.log(myObject);
```

## ES NEXT?

El equipo que recibe, construye y evalúa las nuevas implementaciones de ECMAscript  se llama TC39.

El proceso:

Stage 0: Idea

Stage 1: Proposal

Stage 2: Draft

Stage 3: Candidate

Stage 4: Ready

