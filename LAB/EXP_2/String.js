//check palindrom
let str ="madam"
let rev =""
for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}
if(str == rev){
    console.log("palindrom");
    
}
else
    console.log("not palindrom");
    
//count vowels in string
let str2 ="divya";
let count =0;
for(let i=0;i<str2.length;i++){
    if(str2[i]=="A"||str2[i]=="E"||str2[i]=="O"||str2[i]=="I"||str2[i]=="U"){
        count++
    }
    if(str2[i]=="a"||str2[i]=="e"||str2[i]=="i"||str2[i]=="o"||str2[i]=="u"){
        count++
    }
}
console.log(count);

//reverse no
let num=1234;
let reverse =0;
let rev1;
while(num != 0){
    rev1 = num % 10;
    reverse = reverse * 10 + rev1;
    num = parseInt(num /10);
    
}
console.log("Reversed number:"+reverse);

//Fibonacci series
let n1 = 0 ;
let n2 = 1,nextTerm;
let count1 = 10;

let series ="";

for(let i =1;i<=count1;i++){
    series+=n1 + " ";
    nextTerm = n1 + n2;
   n1 = n2;
   n2 = nextTerm;
}
console.log("Fibonacci series:"+ series);

