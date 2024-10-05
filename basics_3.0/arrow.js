// this use for current context
const user = {
    username: "Pawan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Raja"

// user.welcomeMessage()

// console.log(this);   //empty object in node and in browser it show Window object
// in browser global object is Window Object

// function chai(){
//     let username = "Pawan"
//     console.log(this);   //output is not a empty object
//     console.log(this.username);   //output is undefined
    
// }
// chai()
// const chai = function(){
//     let username = "Pawan"
//     console.log(this.username); //output is undefined
//     console.log(this);  //output is not a empty object
    
// }

// const chai = () =>{
//     let username = "Pawan"
//     console.log(this.username);  //output is undefined
//     console.log(this);  //output is empty object
    
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2. //explicit return
// }

// const addTwo = (num1, num2) => num1 + num2 //implicit return

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => {username: "Pawan"} //return undefined

const addTwo = (num1, num2) => ({username: "Pawan"}) //retrun { username: 'Pawan' }

console.log(addTwo(15, 10));
