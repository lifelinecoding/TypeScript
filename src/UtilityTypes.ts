// Utility Types are built-in generic types that help us transform and manipulate existing types.

// Partial<T> Utility type: This makes all properties optional

type User = {
  name: string;
  age: number;
  course: string;
  joinDate?: Date;
};

type PartialUser = Partial<User>;

// Required<T> utility type: This makes all properties required to be pas or assign.

type requiredUser = Required<User>;

// Pick<T, K> utility type: This helps us to create a new type by selecting few properties of the existing type

type pickUser = Pick<User, "name" | "age">;

// Omit<T, K> utility type: This helps us to create a new type by skipping few properties and taking the rest.

type omitUser = Omit<User, "joinDate">;

// Readonly<T> utility type: This makes all the properties of the existing type to readonly and give a new type

type readonlyUser = Readonly<User>;

// Record<K, T> utility type: This creates a new object type in which key are of type K and values are of type T.

type Roles = "user" | "admin";

type permissions = Record<Roles, boolean>;

// Exclude<T, K> utility type : This removes types from a union type

type A = "a" | "b" | "c";

type B = Exclude<A, "a" | "c">

// Extract<T, K> utility type: This keeps only the assigned type from a union types

type C = "a" | "b" | "c";

type D = Extract<C, "a" | "c">;

