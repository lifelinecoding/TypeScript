// Generics means generalizing the data structure to adapt the different datatypes. This increases code reuseability.

interface User<A, B> {
  id: A;
  name: B;
  email: B;
  contact: A;
}

const user: User<number, string> = {
  id: 5,
  name: "Aditya Patel",
  email: "test@test.com",
  contact: 896574512,
};

//Function to wrap a data into array using generica
function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray("Aditya"));
console.log(wrapInArray(4521));
console.log(wrapInArray({ id: 1, name: "Aditya" }));
console.log(wrapInArray([5, 3, "Aditya", true]));
