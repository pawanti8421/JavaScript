const accountId = 1510
let accountEmail = "pawanTiwari8421@gmail.com"
var accountPassword = "1234"
accountCity = "Thane"
let accountState;

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// accountId = 9   //not allowed we cant change const variable
console.log(accountId);

accountEmail = "pt@gmail.com"
console.log(accountEmail, typeof accountEmail);

accountPassword = "5678"
console.log(accountPassword);
console.log(accountPassword, typeof accountPassword);

accountCity = "Mumbai"
console.log(accountCity);





