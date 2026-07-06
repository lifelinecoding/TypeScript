// Arrays
const user: readonly string[] = ["Aditya", "Anand"];
const user1: Array<string> = ["Anand", "Aditya"];
type User = {
  id: number;
  name: string;
};
const user3: readonly User[] = [{ id: 1, name: "Aditya" }];

//Tuples
const tuple: [name: string, email: string] = ["Aditya", "aditya@test.com"];

//Enums
enum Size {
  LARGE = "large",
  MEDUIM = "medium",
  SMALL = "small",
}

const size: Size = Size.LARGE;
console.log(size);
