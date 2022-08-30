// Reference Type
// malumotlarni reference turi ikkiga bulinadi:
// 1. Array
// 2. Object

// 1
const Arrays = ["olimxon", 50, false, null, undefined, { name: "ali" }];
console.log(Arrays);

const Array = ["olimxon", 50, false, null, undefined];
console.log(typeof Array);

// 2
let myObject = {
  name: "Jobirxon",
  Arrays: ["Gilom", "Abror", "Muhammadali"],
  Objects: { Name: "Musavvir", address: { street: "Namangan ko'cha" } },
};
console.log(myObject["Objects"]);
console.log(myObject.Objects.address.street);
console.log(myObject.Arrays.length);

let Object = {
  name: "Jobirxon",
};
console.log(typeof Object);
