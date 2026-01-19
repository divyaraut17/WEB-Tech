function addNumber(a,b){  // function Declaration
    let sum = a+b;    // function defination
    return sum;
}
let  result = addNumber(10,20); //function calling
console.log("sum is :"+result);


//function for even and odd
function check(num){
    if(num % 2 == 0){
      console.log("even");
      
    }
    else{
        console.log("odd");
        
    }
}
check(10);
check(45);

//function to find sum of array
function sum(arr){
    let sum=0;
    for(let i =0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
let arr1 =[1,2,3,4]
console.log(sum(arr1));

