const person = {
  name: "Ali",
  age: 25,
  address: { city: "Toshkent", zip: "100000" },
};
const {
  name,
  age,
  address: { city },
} = person;

console.log(name);
console.log(age);
console.log(city);
