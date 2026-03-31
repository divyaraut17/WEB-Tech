//fetch -- fetch is a inbulit js methods use to make HTTP request
//syntax
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
//activity
//1.where we use promise in company level
//2.why promises better than call back
//3. write a code for 3 ex of promises
//4.4 ex of promises 
//write 1 ex of promises with async and await
//where we use fetch in company level
//write 4 ex of fetch method
//write a 1 code of fetch for async and await
//fetch --  show only 5 records,crete one fake promoises maunally and resolve after 3 sec and reject after 2 
//interview question
//what is promise
//state of promise
//difference between promise and callback
//WHAT DOES FETCH RETURN
//why do use response.json() in fetch
//differert between thencatch and async await
//what is promise chaining
//variabledeclaration.,datetime,calender,fetch,event,dom,numnermath