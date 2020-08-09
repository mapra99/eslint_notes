const data = {
  frontend: 'Oscar',
  backend: 'Miguel',
  design: 'Ana',
};

let {frontend, ...all} = data;
console.log(frontend, all);
