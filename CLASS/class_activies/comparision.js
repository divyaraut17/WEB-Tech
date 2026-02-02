/* Topic: Comparison Operators in JavaScript */

/*
Comparison Operators
Comparison operators are used to compare two values.
They always return a boolean value:
true  → condition is correct
false → condition is incorrect
*/

let a = 10;
let b = 20;
let c = "10";

/*
1. Equal to (==)
- Compares only the value
- Does NOT compare data type
*/

console.log(a == b); 
// false → 10 is not equal to 20

console.log(a == c); 
// true → value of c ("10") is converted to number 10
// type is ignored, so 10 == 10 is true

/*
2. Strict Equal to (===)
- Compares both value AND data type
*/

console.log(a === c); 
// false → value is same (10) but
// data types are different (number vs string)

console.log(a === 10); 
// true → value is same AND data type is number

/*
3. Not Equal to (!=)
- Compares only value
- Type is ignored
*/

console.log(a != b); 
// true → 10 is not equal to 20

console.log(a != c); 
// false → value of c ("10") becomes 10
// so 10 != 10 is false

/*
4. Strict Not Equal to (!==)
- Compares value AND data type
*/

console.log(a !== c); 
// true → value is same but type is different
// number !== string

console.log(a !== 10); 
// false → value and type both are same

/*
5. Greater Than (>)
*/

console.log(b > a); 
// true → 20 is greater than 10

console.log(a > b); 
// false → 10 is not greater than 20

/*
6. Less Than (<)
*/

console.log(a < b); 
// true → 10 is less than 20

console.log(b < a); 
// false → 20 is not less than 10

/*
7. Greater Than or Equal To (>=)
*/

console.log(a >= 10); 
// true → 10 is equal to 10

console.log(a >= b); 
// false → 10 is not greater than or equal to 20

/*
8. Less Than or Equal To (<=)
*/

console.log(a <= 10); 
// true → 10 is equal to 10

console.log(b <= a); 
// false → 20 is not less than or equal to 10

/*
9. Special Comparisons 
*/

console.log(null == undefined); 
// true → both represent absence of value (loose comparison)

console.log(null === undefined); 
// false → data types are different

console.log(false == 0); 
// true → false is converted to 0

console.log(false === 0); 
// false → boolean !== number

console.log("5" > 3); 
// true → "5" is converted to number 5

console.log("abc" > 10); 
// false → "abc" becomes NaN
// any comparison with NaN gives false

