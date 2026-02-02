/* Topic: Number and Math Methods in JavaScript */

/*
1. Number Methods
Number methods are used to:
- Convert values into numbers
- Format numeric values
- Handle decimal precision
*/

let num = 123.456;

/*
Number()
- Converts different data types into numbers
- Mostly used while taking user input (which is string by default)
*/
console.log(Number("100"));     // 100
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number("abc"));     // NaN (invalid number)

/*
parseInt()
- Converts value into integer
- Decimal part is removed
- Used when only whole numbers are required
*/
console.log(parseInt("45.78")); // 45

/*
parseFloat()
- Converts value into floating-point number
- Used when decimal precision is needed
*/
console.log(parseFloat("45.78")); // 45.78

/*
toFixed()
- Rounds number to specified decimal places
- Commonly used in billing, finance, marks calculation
*/
let price = 99.9876;
console.log(price.toFixed(2)); // "99.99" (string)

/*
toString()
- Converts number to string
- Used when concatenation or display is required
*/
let count = 50;
console.log(count.toString(), typeof count.toString());

/*
2. Math Object
Math is a built-in object used for mathematical operations.
It does NOT need to be created (Math.method()).
*/

/*
Math.round()
- Rounds to nearest integer
*/
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

/*
Math.floor()
- Rounds down to nearest integer
- Used in pagination, indexing
*/
console.log(Math.floor(4.9)); // 4

/*
Math.ceil()
- Rounds up to nearest integer
- Used in billing, seat calculation
*/
console.log(Math.ceil(4.1)); // 5

/*
Math.trunc()
- Removes decimal part without rounding
*/
console.log(Math.trunc(8.9)); // 8

/*
Math.abs()
- Returns absolute (positive) value
- Used in distance and difference calculations
*/
console.log(Math.abs(-10)); // 10

/*
Math.pow()
- Returns power of a number
*/
console.log(Math.pow(2, 3)); // 8

/*
Math.sqrt()
- Returns square root
*/
console.log(Math.sqrt(25)); // 5

/*
Math.min() and Math.max()
- Finds minimum and maximum value
- Used in ranking systems
*/
console.log(Math.min(10, 20, 5, 30)); // 5
console.log(Math.max(10, 20, 5, 30)); // 30

/*
3. Math.random()
*/

/*
Math.random()
- Generates a random number between 0 (inclusive) and 1 (exclusive)
- Used whenever unpredictability is required
*/
console.log(Math.random());

/*
Generating random integer between 1 and 10
Formula:
Math.floor(Math.random() * max) + min
*/
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

/*
Why do we use Math.random()?
1. To generate unpredictable values
2. To avoid fixed or repeated outputs
3. To simulate real-life randomness
*/

/*
Real-Time / Company-Level Usage Examples
*/

/*
1. OTP Generation (Banking / FinTech)
*/
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log("OTP:", otp);

/*
2. Online Games (Dice / Cards / Ludo)
*/
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice Value:", dice);

/*
3. Random Discounts (E-commerce)
*/
let discount = Math.floor(Math.random() * 50) + 1;
console.log("Discount %:", discount);

/*
4. CAPTCHA Systems (Security)
- Random values prevent bots
*/

/*
5. Load Balancing / A-B Testing (Companies)
- Randomly assign users to different versions of a website
*/
