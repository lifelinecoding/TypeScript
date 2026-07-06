// An interface is a structural contract that defines the shape of an object, function, or class. It specifies what properties and methods a value must have, without providing implementation details.

interface User {
  id: number;
  name: string;
  email?: string; // Optional Property
  readonly createdAt: Date; //Cannot be changed after creation.
}

class userData implements User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;

  constructor(id: number, name: string, email: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }

  printObjectData(): User {
    const data = {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
    return data;
  }
}

const obj = new userData(1, "Aditya Patel", "example@email.com", new Date());

console.log(obj.printObjectData());

// Intersection in typescript

type type1 = { type: string; quantity: number };
type type2 = { name: string; price: number };

type typeIntersection = type1 & type2;

const usage: typeIntersection = {
  type: "Kind",
  quantity: 53,
  name: "Aditya",
  price: 300,
};
