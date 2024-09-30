// javaScript is a dynamic language and not static,
// Primitive(call by value) =>

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const socreValue = 100.3
const isLoggedIn =false

const outsideTemp = null
let userEamil //undefined
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

const bigNumber = 3456798576893n

const userName = "Pawan"

// Non Primitive (Reference)
//  Array, Objects, Functions


const heros = ["shaktiman", "batman", "superman"]

let myobj = {
    name: "Pawan",
    age: "20",
}

const myFunction = function(){
    console.log("Hi Pawan");
    
}

console.log(typeof score);  //number
console.log(typeof socreValue);  //number
console.log(typeof isLoggedIn);  //boolean
console.log(typeof outsideTemp);   //object
console.log(typeof userEamil);   //undefined
console.log(typeof id);  //symbol
console.log(typeof bigNumber);  //bigint
console.log(typeof userName);   //string
console.log(typeof heros);   //object
console.log(typeof myobj);  //object
console.log(typeof myFunction);  //function

// https://262.ecma-international.org/5.1/#sec-11.4.3
