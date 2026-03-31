/* 1. Simple vs Arrow Function */

console.log("----- 1. Simple vs Arrow Function -----");

// Simple function
function add(a, b) {
    return a + b;
}
console.log("Simple Function:", add(5, 3));

// Arrow function
const addArrow = (a, b) => a + b;
console.log("Arrow Function:", addArrow(5, 3));

console.log(""); // space


/* 2. Arrow Function Examples */

console.log("----- 2. Arrow Function Examples -----");

const add2 = (a, b) => a + b;
console.log("Add Example:", add2(10, 5));

const square = (num) => num * num;
console.log("Square Example:", square(4));

console.log(""); // space


/* 3. Switch Case */

console.log("----- 3. Switch Case -----");

let day = 3;
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

console.log(""); // space


/* 4. Truthy & Falsy */

console.log("----- 4. Truthy & Falsy -----");

let password = "";
if (password) {
    console.log("Password Entered");
} else {
    console.log("Password is required");
}

console.log("Boolean(0):", Boolean(0));
console.log("Boolean('Hello'):", Boolean("Hello"));
console.log("!!null:", !!null);
console.log("!!'JS':", !!"JS");

console.log(""); // space


/* 5. Ternary Operator */

console.log("----- 5. Ternary Operator -----");

let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

console.log(""); // space


/* 6. Loops */

console.log("----- 6. Loops -----");

// for...of
console.log("for...of Loop:");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

console.log(""); // space

// for...in
console.log("for...in Loop:");
let student = {
    name: "Rahul",
    age: 20,
    course: "BSc CS"
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}

console.log(""); // space


/* 7. map() and filter() */

console.log("----- 7. map() and filter() -----");

let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled:", doubledNumbers);

let numbers1 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

console.log(""); // space

console.log("----- 8. this keyword -----");

let student1 = {
    name: "Amit",
    age: 21,
    course: "BSc CS",
    showDetails: function () {
        console.log("for...in:");
        for (let key in this) {
            // skip function
            if (typeof this[key] !== "function") {
                console.log(key + ": " + this[key]);
            }
        }
    }
};
student1.showDetails();

console.log(""); // space

let student2 = {
    name: "Amit",
    subjects: ["Maths", "Physics", "Computer"],
    showSubjects: function () {
        console.log("for...of:");
        for (let subject of this.subjects) {
            console.log(subject);
        }
    }
};
student2.showSubjects();

console.log(""); // space


/* 9. reduce() */

console.log("----- 9. reduce() -----");

let numbers2 = [10, 20, 30, 40];
let sum = numbers2.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);