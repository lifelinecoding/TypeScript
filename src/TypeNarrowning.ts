// Type narrowing refers to perform different operations on the same variable based on the datatype

let data: string | number | boolean;

data = "Aditya Patel";

const checkType = (input: string | number | boolean) => {
  if (typeof input === "string") {
    console.log("The input is a string", input);
  } else if (typeof input === "number") {
    console.log("The input is a number", input);
  } else {
    console.log("The input is boolean", input);
  }
};

// checkType(data);

//Type narrowing based on classes

class order {
  name: string = "This is a good boy";
  cost: number = 500;
}

class purchase {
  product: string = "Large size refrigrator";
  condition: "Good" | "Bad" | "Average" = "Average";
}

const o1 = new order();
const p1 = new purchase();

const checkClass = (data: order | purchase) => {
  if (data instanceof order) {
    console.log(data.name);
    console.log(data.cost);
  } else {
    console.log(data.product);
    console.log(data.condition);
  }
};

// checkClass(p1);
