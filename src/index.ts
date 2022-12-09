import { logError } from "./logger";

let greeting: string = "Hello, world! 🥳";

//Print the greeting
console.log(greeting);

const numberOfError: number = 3;

logError(`There are ${numberOfError} errors in the project 💀`);
