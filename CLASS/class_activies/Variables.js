
 /*Topic: Variables and Data Types in JavaScript*/

/* 1. Difference between var, let, and const */

/*
var:
- Introduced in old JavaScript (ES5)
- Function-scoped (not block-scoped)
- Can be redeclared and updated
- Hoisting happens (initialized with undefined)
*/
var a = 10;
var a = 20; // redeclaration allowed
a = 30;     // updation allowed
console.log("var a:", a);

/*
let:
- Introduced in ES6
- Block-scoped (works only inside {})
- Cannot be redeclared in the same scope
- Can be updated
- Hoisted but not initialized
*/
let b = 40;
// let b = 50; // redeclaration not allowed
b = 60;       // updation allowed
console.log("let b:", b);

/*
const:
- Introduced in ES6
- Block-scoped
- Cannot be redeclared or updated
- Must be initialized at the time of declaration
*/
const c = 70;
// c = 80; //  updation not allowed
console.log("const c:", c);

/* 2. Types of Data in JavaScript */

/*
JavaScript data types are divided into:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/

/*
Primitive Data Types
- Stored by value
- Immutable (cannot be changed)
*/

// Number
let num = 25;

// String
let name = "Divya";

// Boolean
let isStudent = true;

// Undefined
let x;

// Null
let y = null;

// BigInt
let bigNumber = 12345678901234567890n;

// Symbol
let uniqueId = Symbol("id");

/* Non-Primitive Data Types
- Stored by reference
- Mutable (can be changed)
*/

// Object
let person = {
  name: "Divya",
  age: 20
};

// Array
let marks = [80, 85, 90];

// Function
function greet() {
  console.log("Hello!");
}

/*
3. Variable Declaration and typeof Operator
*/

// Declaring variables of different data types
let numberValue = 100;
let stringValue = "JavaScript";
let booleanValue = false;
let undefinedValue;
let nullValue = null;
let objectValue = { key: "value" };
let arrayValue = [1, 2, 3];

// Checking type using typeof
console.log("Type of numberValue:", typeof numberValue);      // number
console.log("Type of stringValue:", typeof stringValue);      // string
console.log("Type of booleanValue:", typeof booleanValue);    // boolean
console.log("Type of undefinedValue:", typeof undefinedValue);// undefined
console.log("Type of nullValue:", typeof nullValue);          // object (JavaScript bug)
console.log("Type of objectValue:", typeof objectValue);      // object
console.log("Type of arrayValue:", typeof arrayValue);        // object
console.log("Type of greet:", typeof greet);                  // function

/* 4. Difference between null and undefined */

/*
undefined:
- Variable is declared but not assigned a value
- Automatically assigned by JavaScript
*/
let u;
console.log("u value:", u);
console.log("Type of u:", typeof u);

/*
null:
- Represents intentional absence of value
- Assigned manually by the programmer
*/
let n = null;
console.log("n value:", n);
console.log("Type of n:", typeof n);

/*
Key Differences:
undefined:
- Means value is not assigned
- Given by JavaScript

null:
- Means no value intentionally
- Assigned by developer
*/
