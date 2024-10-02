function sayMyName(name){
    console.log(`Hi ${name}`);
    
}
// sayMyName("Pawan Tiwari")

// function addnumber(number1, number2){  //parameters
//     console.log(number1 + number2);
    
// }
function addnumber(number1, number2){  //parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addnumber(5, 5)   //arguments
// console.log("Result: ",result);

function loginUserMessage(username = "xyz"){
    if(!username){
        // console.log("Please enter a username")
        return "Please enter a username"
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Pawan"))
console.log(loginUserMessage())
