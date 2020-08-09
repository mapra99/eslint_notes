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
