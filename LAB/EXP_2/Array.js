//array declaration-
//ex of array-
//function declaration and ex-
//object declaration-
//write  reverse no-
//check palindrom no-
//febonachi series-
//count vows in string-
//find largesrt element in array-
//remove duplictes in array-
//find missing no in array-
//function to find even or odd-
//function to find sum of array-

//array declaration
let arr = [1,2,3,4,5,6];
console.log(arr);

//object declaration
let O = {name : "divya",age :20,id :101}
console.log(O);
console.log(O.name);
console.log(O.age);

//find largest element in array
let arr1 =[1,2,3,4]
let max = arr1[0]
for(let i=0;i<arr1.length;i++){
    if(max < arr1[i]){
        max = arr1[i]
    
        
    }
}

console.log("largest no is:",max);

//remove duplicate in array
let number =[1,2,2,3,4,4,5]
let uniquenum =[];
for(let i =0;i<=number.length;i++){
    let isDuplicate=false;
    //check if current no is already in uniquenum 
    for(let j=0;j<uniquenum.length;j++){
        if(number[i] === uniquenum[j]){
            isDuplicate=true;
            break;

        }
    }
    //if not duplicate add to uniquenum
    if(!isDuplicate){
        uniquenum[uniquenum.length]=number[i];
    }
}
let result ="";
for(let i =0 ; i<uniquenum.length;i++){
    result+=uniquenum[i]+" ";
}
console.log("Unique array :"+result);

//find missing no in array
//using sum formula
let arr2 = [1,2,3,5,6]
let n = arr2.length+1;

//sum of 1..n no formula: n*(n+1)/2
let sum = (n*(n+1))/2;

let arrsum=0;
for(let i=0;i<arr2.length;i++){
    arrsum+=arr2[i];
}
let missing = sum - arrsum;
console.log("Missing no is:"+missing);
