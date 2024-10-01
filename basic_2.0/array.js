const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[3]);


// Array methods
// myArr.push(15)
// console.log(myArr);

// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(15));  false
// console.log(myArr.indexOf(25));   //-1

const newArr = myArr.join() //join() convert array elements into string seperated by comma

// console.log(myArr);
// console.log(newArr);

// Slice, spice

console.log("A ", myArr) //[ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1);  //[ 1, 2 ]

console.log("B ", myArr) //[ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1,3)
console.log("C ", myArr)  //[ 0, 4, 5 ]
console.log(myn2);  //[ 1, 2, 3 ]
