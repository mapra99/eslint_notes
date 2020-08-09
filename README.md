# Curso de ECMAScript 6+

## Qué es ECMAScript

Es la especificación de lenguaje propuesto por ECMA Inernacional. En terminos practicos, cada estándar producido por ECMA marca una "versión" sobre el uso de Javascript. ECMA ha lanzado versiones desde 1996 hasta ahora. Tuvo un estanque entre 1999 y 2001

## Default Params

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

## Template Literals

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

## Multiline

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

## Propagation operator

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

## LET and CONST variables

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

