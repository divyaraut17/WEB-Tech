// Object declaration
let object1 = {
    name: "Divya",
    id: 101,
    age: 20
};
console.log(object1);
console.log(object1.name);
console.log(object1.age);
console.log();

// Array declaration
let arr = [1,2,3,4,5];
console.log(arr);
console.log();

// Find laragest element in array
let arr1 = [6,8,90,35,2];
let largest = arr1[0];
for(let i = 0;i <= arr1.length; i++){
    if(largest < arr1[i]){
        largest = arr1[i];
    }
}
console.log("Find largest element in Array ");
console.log("largest element is : " ,largest);

// Remove duplicate element in array
let arr2 = [1,2,3,2,4,1,5,6,5];
let uniqueArray = [];
for(let i = 0; i< arr2.length;i++){
    if(! uniqueArray.includes(arr2[i])){
        uniqueArray.push(arr2[i]);
    }
}
console.log("\nRemove Dulpicate in array");
console.log("Unique Array is : ", uniqueArray);

// Find missing no in array
let arr3 = [1,2,3,5,6];
let n = 6;
let expectedSum = (n * (n + 1)) / 2; // Sum formula of first n natural numbers
let actualSum = 0;
for (let i = 0;i < arr3.length; i++){
    actualSum += arr3[i]; 
}
let missingNumber = expectedSum - actualSum;
console.log("\nFind missing number in array");
console.log("The missing number is : ", missingNumber);

// Write a code for sum of array
let arr4 = [2,3,4,5,1];
let sum = 0;
for (let i = 0; i < arr4.length; i++){
    sum = sum + arr4[i];
} 
console.log("\nFind sum of array");
console.log("Sum of Array is : ", sum);

// For string - Reverse a string
let str = "Hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
}
console.log("\nFind reversed string");
console.log("The reversed string is : " , reversed);

// Check string is palindrome or not 
let str1 = "madam";
let rev = "";
console.log("\nFind Palindrome string");
for (let i = str.length - 1; i >= 0; i--){
    rev += str1[i];
}
if(str1 === rev){
    console.log("The given string is palindrom");
}
else{
    console.log("The given string is not palindrom");
}

// Count vowels in string
let str2 = "JavaScript";
let count = 0;
str2  = str2.toLowerCase();
for (let i = 0; i < str2.length; i++){
    if(
        str2[i] === 'a' ||
        str2[i] === 'e' ||
        str2[i] === 'i' ||
        str2[i] === 'o' ||
        str2[i] === 'u'
    ){
        count++;
    }
}
console.log("\nFind count of vowels in string");
console.log("Count of vowels in string is : ",count);

// Write a code for for reverse number
let num = 12345;
let revNum = 0;
while(num > 0){
    let lastDigit1 = num % 10;
    revNum = revNum * 10 + lastDigit1;
    num = Math.floor(num / 10);
}
console.log("\nFind reversed number");
console.log("Reversed Number is : ", revNum);

// Check palindrome no.
let num1 = 121;
let originalNum = num1;
let reversedNum = 0;
console.log("\nFind number is palindrome or not");
while(num1 > 0){
    let lastDigit2 = num1 % 10;
    reversedNum = reversedNum * 10 + lastDigit2;
    num1 = Math.floor(num1 / 10);
} 
if(originalNum === reversedNum){
    console.log(originalNum + " is Palindrome number");
}
else{
    console.log(originalNum + "is Not a Palindrome number");
    
}
// For no.s - check prime
let num2 = 29; 
let isPrime = true;
console.log("\nFind Prime Number");
if (num2 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num2); i++) {
        if (num2 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num2 + " is Prime number");
} else {
    console.log(num2 + " is Not a prime number");
}

// Check number is  factorial no or not 
let num3 = 5;
let factorial = 1
for (let i = 1; i <= num3; i++) {
    factorial *= i;
}
console.log("\nFind number is factorial");
console.log("Factorial:", factorial); // 120

// Write a code for fabinoccic series
let noOfTerms= 10; // number of terms
let a = 0, b = 1;
console.log("\nFind fabinoccic series");
console.log(a); // first term
console.log(b); // second term
for (let i = 2; i < noOfTerms; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// Function Declaration
function addNumber(a, b) {   // Function declaration
    let sum = a + b;        // Function body (definition)
    return sum;
}
let result = addNumber(10, 20); // Function call
console.log("Sum is: " + result);

// Write function to find a no is even or odd
function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let result2 = checkEvenOdd(7);
console.log("\nFind even or odd number using function");
console.log(result2);

 

