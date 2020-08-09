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

