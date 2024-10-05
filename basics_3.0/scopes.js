// var c = 300;
let a =300;     //global scope
if(true){
    let a = 10;  //block scope
    const b = 15;
    // console.log("inner:", a);
    

}

// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "Pawan"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

let t = 15
// console.log(typeof t)
// let t = "Pawan" //not possible
t = "Pawan"
//  console.log(typeof t)

const p = 10
//console.log(typeof p)
// p = 15  //not possible Assignment to constant variable.
//const p = 15. //not possible
//console.log(p);

var d = 20
// console.log(typeof d);
var d = "Pawan"
// console.log(typeof d);



// ********************** interesting *************

// case one
addone(14)  //possible
function addone(num){
    return num + 1
}

// case two
// addTwo(13)  //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
addTwo(13)
