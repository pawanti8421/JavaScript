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
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){  //rest operator
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){  //rest operator
    return num1 //=>[500,600]
}
//console.log(calculateCartPrice(200, 400, 500, 600));

const user = {
    username: "Pawan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "Raja",
//     price: 399
// })

function returnSecondValue(getArray){
    return getArray[1]
}

const myNewArray = [200, 400, 600]
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000, 4000, 6000]));
