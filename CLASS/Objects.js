//we can declare 2 types of objects-->
//1.object literals
//2.object singleton
//object--> key value pair
//object literals --> 
let user = {
    name:"divya",
    age :23,
    email:"divya",
    city:"sangli",
    islogin:true,
    lastlogindate:["monday","tuesday"],
    "full name":"sayama" // do not write this 
    
}

console.log(user["full name"]);

console.log(user.email="sayama@mail");

//Object.freeze(user)  //--> to fix the value of any object
user.greeting = function(){
    console.log("hello.js");
    
}
console.log(user.greeting())

user.greeting2 = function(){
    console.log(`hello my email is ${this.email}`);
    
}
console.log(user.greeting2())

// user.email = "abc";

// console.log(user.email);
// //Symbol Example
// const mySymbol = Symbol("abc");
// const myObj1 ={
//     [mySymbol] : "divya"
// }
// console.log(myObj1[mySymbol]);
// console.log(typeof(myObj1));

//create one symbol and add 1 object key and print symbol--> interview q




