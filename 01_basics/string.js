const name = "roshan"
const repoCount = 20

// console.log(name + repoCount + "value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String(`buff-net-sax`)

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);

const newStringOne = " roshan   "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://roshan.com/roshan%20krsu"

console.log(url.replace('%20','-'))

console.log(url.includes('damn'))

console.log(gameName.split('-'))