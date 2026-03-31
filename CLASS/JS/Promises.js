//asynchronous programming
// console.log("Start");
// setTimeout(() => {
//     console.log("Inside settimeout");

// },2000)
// console.log("End");
// //promises --
//promise is an object that reprent future result of an asynchronous operations.
//promises--> give result later.
//waiting/pending, resolve/success,reject--> 3 states of promises
//2 parameter-- resolve ,reject
//syntax 
let MyPromise = new Promise((resolve,reject) => {
let success = true;
if(success){
    resolve("promise is fulfilled");
}
else{
    reject("promises is rejected");
}
});
MyPromise.then((result) => {
    console.log(result);
    
}).catch((error) => {
console.log(error);

})
//resolve -- success
//reject -- error
//.then --run when success
//.catch -- run when error
