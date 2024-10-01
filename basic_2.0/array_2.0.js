const marvel_heros = ["Thor", "Ironman", "Captain America"]
const dc_heros = ["Batman", "Spiderman", "Superman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const heros = marvel_heros.concat(dc_heros) //return new arrays
//console.log(heros);


const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const arrayAll = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arrayAll = arrayAll.flat(Infinity)

// console.log(real_arrayAll);

console.log(Array.isArray("Pawan"))
console.log(Array.from("Pawan"))  //convert into array

console.log(Array.from({name: "Pawan"})) //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));




