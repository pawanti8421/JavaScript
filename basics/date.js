// Dates

let myDate = new Date();
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

//let myCreatedDate = new Date(2023, 0, 23);
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
//let myCreatedDate = new Date("2024-01-15");
let myCreatedDate = new Date("01-15-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

// console.log(myCreatedDate.getTime());

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString("default",{
    weekday:"short",
    
}));

