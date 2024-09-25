// Define a basic string variable with type annotation
let message: string = "Hello, TypeScript";

// Function with typed parameters and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

// An interface to define the structure of an object
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
}

// Create an object using the interface
const person: Person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
};

// Log outputs
console.log(message);
console.log("Sum of 2 and 3:", addNumbers(2, 3));
console.log("Person Details:", person);
