/* Topic: Functions and Array Methods in JavaScript */


/*
What is a function?
- A function is a block of reusable code
- It performs a specific task
- It is executed only when called
*/

// Function Declaration
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// Function Call
greet();

/*
Function with Parameters
- Parameters are values passed to a function
*/
function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log("Sum:", sum);

/*
Why functions are used:
- Code reusability
- Better readability
- Easy maintenance
*/



/*
What is an Array?
- An array stores multiple values in a single variable
- Index starts from 0
*/

let numbers = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango"];

/*
1. length
Returns total number of elements in an array
*/
console.log("Array length:", numbers.length);

/*
2. push()
- Adds element at the end of array
- Used to insert new data
*/
numbers.push(60);
console.log(numbers);

/*
3. pop()
- Removes last element
- Used in stack operations
*/
numbers.pop();
console.log(numbers);

/*
4. unshift()
- Adds element at the beginning
*/
numbers.unshift(5);
console.log(numbers);

/*
5. shift()
- Removes first element
*/
numbers.shift();
console.log(numbers);

/*
6. indexOf()
- Finds index of an element
- Returns -1 if not found
*/
console.log(fruits.indexOf("Banana"));

/*
7. includes()
- Checks if element exists
- Returns true or false
*/
console.log(fruits.includes("Apple"));

/*
8. join()
- Converts array into string
*/
console.log(fruits.join(", "));

/*
9. slice()
- Extracts part of array
- Does NOT change original array
*/
let slicedArray = numbers.slice(1, 4);
console.log("Sliced:", slicedArray);

/*
10. splice()
- Adds/removes elements
- Changes original array
*/
numbers.splice(2, 1, 99);
console.log("After splice:", numbers);

/*
11. concat()
- Merges two arrays
*/
let moreNumbers = [70, 80];
let combined = numbers.concat(moreNumbers);
console.log("Combined Array:", combined);

/*
12. reverse()
- Reverses array order
*/
combined.reverse();
console.log("Reversed:", combined);

/*
13. sort()
- Sorts array elements
*/
let marks = [40, 10, 100, 30];
marks.sort((a, b) => a - b); // ascending
console.log("Sorted Marks:", marks);

/*
14. forEach()
- Executes function for each element
- Does not return new array
*/
fruits.forEach(function (item) {
  console.log("Fruit:", item);
});

/*
15. map()
- Returns a new array
- Used for transformation
*/
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared:", squaredNumbers);

/*
16. filter()
- Returns elements that match condition
*/
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

/*
17. reduce()
- Reduces array to a single value
- Used for sum, total, average
*/
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total:", total);

/*
18. find()
- Returns first matching element
*/
let found = numbers.find(num => num > 25);
console.log("Found Element:", found);

/*
19. findIndex()
- Returns index of first matching element
*/
let foundIndex = numbers.findIndex(num => num > 25);
console.log("Found Index:", foundIndex);

/*
20. every()
- Checks if all elements satisfy condition
*/
console.log(numbers.every(num => num > 0));

/*
21. some()
- Checks if at least one element satisfies condition
*/
console.log(numbers.some(num => num > 90));
