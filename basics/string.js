// javascript and mdn
const name = "Pawan"
const repoCount = 12
// console.log(name + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Pawan Tiwari-15-10-2004")
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("T"));

const newString = gameName.substring(0, 4)
console.log(newString) //Pawa
 
const anotherString = gameName.slice(-22,4)
console.log(anotherString); //awa

const newStringOne = "    Pawan.  "
console.log(newStringOne);  //"    Pawan.  "
console.log(newStringOne.trim())   //Pawan.

const url = "https.//pawan.com/pawan%20tiwari"
console.log(url.replace("%20","-"));  //https.//pawan.com/pawan-tiwari

console.log(url.includes("pawan")) //true
console.log(gameName.split("-"));



