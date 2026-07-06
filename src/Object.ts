// This is how we create an objject in typescript. It's called structural typing
type User = {
  id: number;
  name: string;
  email?: string;
  contact: number;
};

const user: User = {
  id: 1,
  name: "Aditya Patel",
  contact: 8965745125,
};

//Duck typing
const tempUser = {
  id: 2,
  name: "Duck",
  email: "test@email.com",
  contact: 8541526396,
  address: "This is address",
};

const duckUser: User = tempUser; // This allows extra property address because bare minimum properties are fullfilled!

// console.log(duckUser);

// Partial Type:- Make all the properties of the datatype partial. We can pass all properties or nothing
type partialType = Partial<User>;
const partialUser: partialType = { id: 5 };

//Required Type:- Make all the proerties of the datatype required and mandatory. If any property miss then it will throw error

type requiredType = Required<User>;
const requireduser: requiredType = {
  id: 6,
  name: "Aditya",
  email: "test@email.com",
  contact: 8574126365,
};

//Pick Type:- Pick the specified union properties from a datatype
type pickType = Pick<User, "id" | "name">;
const pickUser: pickType = {
  id: 7,
  name: "Aditya Patel",
};

//Omit Type:- It removes the specified union properties from a datatype
type omitType = Omit<User, "name" | "contact">;
const omitUser: omitType = {
  id: 8,
  email: "test@mail.com", // Optional Property
};
