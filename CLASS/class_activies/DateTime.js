/* Topic: Date and Time in JavaScript */

/*
Why Date and Time methods are used
--> Date and Time methods are used to:
- Get current date and time
- Display date/time to users
- Calculate time differences
- Store timestamps in databases
- Build real-time applications (logs, OTP expiry, sessions)
*/

/*
1. Creating Date Objects
*/

// Current date and time
let now = new Date();
console.log("Current Date & Time:", now);

/*
Creating a specific date
Format: new Date(year, month, day, hours, minutes, seconds)
NOTE: Month starts from 0 (January = 0)
*/
let customDate = new Date(2026, 0, 15, 10, 30, 0);
console.log("Custom Date:", customDate);

/*
Creating date using string
*/
let stringDate = new Date("2026-01-15");
console.log("String Date:", stringDate);

/*
2. Getting Date Components
*/

console.log("Year:", now.getFullYear());    // returns year (YYYY)
console.log("Month:", now.getMonth());      // 0–11
console.log("Date:", now.getDate());        // day of month
console.log("Day:", now.getDay());          // 0–6 (Sun–Sat)
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

/*
Why we use get methods:
- To display formatted date/time
- To extract only required information
*/

/*
3. Setting Date Components
*/

let setDate = new Date();
setDate.setFullYear(2025);
setDate.setMonth(5);
setDate.setDate(20);
setDate.setHours(14);
setDate.setMinutes(45);
console.log("Modified Date:", setDate);

/*
Why set methods are used:
- To update date/time dynamically
- To calculate future or past dates
*/

/* 4. Date Formatting Methods */

console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());
console.log("toISOString():", now.toISOString());

/*
Why formatting is used:
- User-friendly display
- Locale-based date/time
- API and database storage
*/

/*
5. Timestamps in JavaScript
*/

/*
Timestamp:
- Number of milliseconds passed since
  1 January 1970 (UTC)
- Used for exact time calculation
*/

// Getting timestamp using Date.now()
let currentTimestamp = Date.now();
console.log("Current Timestamp:", currentTimestamp);

/*
Getting timestamp from Date object
*/
let dateObjTimestamp = now.getTime();
console.log("Timestamp from Date Object:", dateObjTimestamp);

/*
How Timestamps Work (Example)
*/

// Storing login time
let loginTime = Date.now();

// Simulating delay
setTimeout(() => {
  let currentTime = Date.now();
  let difference = currentTime - loginTime;

  console.log("Time spent (ms):", difference);
  console.log("Time spent (seconds):", difference / 1000);
}, 2000);

/*
Why timestamps are important:
- Session management
- Token expiration
- Chat message ordering
- Server-client synchronization
*/

/*
6. Real-Time / Company-Level Examples
*/

/*
1. OTP Expiry (Banking Apps)
*/
let otpGeneratedTime = Date.now();
let otpValidity = 300000; // 5 minutes

if (Date.now() - otpGeneratedTime <= otpValidity) {
  console.log("OTP is valid");
} else {
  console.log("OTP expired");
}

/*
2. Attendance System
- Store timestamp instead of date string
*/

/*
3. Chat Applications
- Messages sorted using timestamps
*/

/*
4. E-commerce Orders
- Track order placed and delivered time
*/

