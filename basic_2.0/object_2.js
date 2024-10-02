// const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    emai: "pawan@google.com",
    fullName: {
        userfullName: {
            firstname: "Pawan",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularUser.fullName.userfullName.lastname);

const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "a", 4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2). //{}=>target, obj1 and obj2 => source
// console.log(obj3);

const obj3 = {...obj1, ...obj2} //spread operator
//console.log(obj3);

const users =[
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    },


]

// console.log(users[1].id);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //outputs data type is array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// const {courseInstructor} = course
const {courseInstructor: insturctor} = course //destucture

console.log(insturctor)

// {
//     name: "Pawan",
//     coursename: "js in hindi",
//     price: "free"
// }