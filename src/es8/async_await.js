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
