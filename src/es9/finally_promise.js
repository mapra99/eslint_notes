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
