// // arrow fun and simple function difference --- do we use this in any function
// // normal function   
// function add1(a,b){
//     return a + b;
//    }
  
// // arrow function
// const add2 =(a,b) => a+b;

// //Normal function
// //this depends on how the function is called
// function show() {
//   console.log(this);
// }

//Arrow function
//this is taken from parent scope (lexical this)
//It does NOT have its own this
// const show = () => {
//   console.log(this);
// };

// const user = {
//   name: "Divya",
//   sayName: function () {
//     console.log(this.name); // ✅ works
//   },
// };

//write a code for arrow function 
const add = (a, b) => {
  return a + b;
};
const sub = (x,y) => {
    return x - y;
}
// Calling the arrow function
console.log(add(5, 3)); 
console.log(sub(6,3));

//write a code for switch case
// Switch case example
let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// how to use truthy and falsy values in js
//Truthy means: a value that is treated as true in a condition.
//Falsy means: a value that is treated as false in a condition.
//Fasly values: false, 0, "", null, undefined, NaN
//Truty Values: evrything else(non-empty string, non-zero number, objects, arrays)

let value = "Hello";

if (value) {          // truthy check
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}

// Example with falsy value
let count = 0;

if (count) {          // falsy check
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// ternary op
//ternary op is short form of if-else
let a =5
if(a >=3){
    console.log("True");
    
}                              /// instead of this we use ternary operator
else
    console.log("False");
    
// Ternary operator
let age = 18;
let result = (age >=18) ? "Adult" : "Minor";
console.log(result);

//loops
// for loop
let num=5;
for(let i =1;i <=num;i++){
    console.log(i);
    
}
//  

//for-of and for-in
// write a code for how to use loops in array
//filters and maps




