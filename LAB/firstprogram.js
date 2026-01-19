//without block of scope

// let ch = "divya"
// ch = "divya raut"
// console.log(ch);

// with block of scope
// {
//     let ch = "divya"
//     ch = "divya raut"
//     console.log(ch);
    
// }

let name = "divya raut"
{
    let name = "divya"
    console.log(name);
    
}
console.log(name);


// let name = "divya raut"
//         let age = 20
//         document.write("name:",name,"<br>","age:",age);