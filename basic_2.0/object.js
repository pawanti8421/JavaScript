// Singleton :- if you create through constructor
// Object.create

// Object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Pawan",  //js take name it self a string
    "full name": "Pawan Tiwari",
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    eamil: "pawan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
console.log(jsUser.location);
console.log(jsUser["location"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.eamil = "pawan@microsoft.com"
// Object.freeze(jsUser) //after this no changes happen
jsUser.eamil = "pawan@chatgpt.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log(`Hello ${this["full name"]}`)
}

jsUser.greeting()