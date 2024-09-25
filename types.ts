// Basic Types
let isActive: boolean = true;
let userName: string = "Alice";
let userAge: number = 28;

// Array Types
let numberArray: number[] = [1, 2, 3, 4];
let stringArray: Array<string> = ["TypeScript", "JavaScript", "Python"];

// Function with typed parameters and return type
function multiply(x: number, y: number): number {
    return x * y;
}

// Object Types using inline annotation
let user: { name: string; age: number; isEmployed: boolean } = {
    name: "John",
    age: 25,
    isEmployed: true,
};

// Union Types
let mixedValue: string | number;
mixedValue = "Hello";
mixedValue = 123;  // valid because of union type

// Function that returns void (no return value)
function logMessage(message: string): void {
    console.log(message);
}

// Custom Type (type alias)
type Role = "admin" | "user" | "guest";
let userRole: Role = "admin";

// Interface for object types
interface Car {
    brand: string;
    model: string;
    year: number;
}

// Object following Car interface
const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};

// Function with optional parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}`;
}

// Function with default parameter value
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// Array of objects with interface typing
const cars: Car[] = [
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Fiesta", year: 2018 },
];

// Tuple types
let person: [string, number];
person = ["Alice", 30];

// Enum type
enum Direction {
    North,
    East,
    South,
    West,
}
let currentDirection: Direction = Direction.North;

// Function returning never (for functions that throw errors or never return)
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// Example usage of all elements above
console.log(userName); // Output: Alice
console.log(multiply(5, 3)); // Output: 15
console.log(greet("Bob", "Hi")); // Output: Hi, Bob
console.log(myCar); // Output: { brand: 'Toyota', model: 'Corolla', year: 2020 }
console.log(currentDirection); // Output: 0 (since North is the first enum member)

// Using a custom type and interface in combination
let personRole: Role = "guest"; // Using custom type Role
let newUser: Car = { brand: "Tesla", model: "Model S", year: 2021 }; // Using interface
