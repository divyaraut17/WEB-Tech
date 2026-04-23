function student(props){
    const myfullname="divya raut"
    //function can return only once after the 1st return second line never executes.
//     return(
//         <>
//         <h1>Student</h1>
//         <p>{myfullname}</p>
//         </>
// )
return <h2>{props.myfullname}</h2>
}

export default student