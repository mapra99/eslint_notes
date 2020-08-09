// Variables defined with const won't change
const a = "a";
a = "b"; // will raise an exception

const arr = ["hello"]
arr.push("world") // this will work since arr is still an array
arr = {hello: "world"} // this will raise an exception
