// Type assertion in TypeScript is a mechanism that allows you to explicitly tell the compiler to treat a value as a specific type, overriding its inferred type.

//Example:- In the below example we are promising that inout data will be HTML inout type

const inputData = document.getElementById("input") as HTMLInputElement;

// Another example is for API response
let apiresponse: any;
const response = JSON.parse(apiresponse) as { id: number; name: string };

console.log(response.name);

//Use never datatype

type Role = "User" | "Admin";

const redirectBasedOnRole = (role: Role) => {
  if (role === "Admin") {
    console.log("Redirecting to admin dashboard!");
    return;
  }
  if (role === "User") {
    console.log("Redirecting to user dashboard!");
    return;
  }
  role;     // This is automatically set to never because we have already handled the edge cases
};

redirectBasedOnRole("User")
