// #primitive datatype

// 7 types:String ,Number , Boolean, null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id=== anotherId);

// const bigNumber = 4342342342343243354545n





// #reference datatype(non-primitive)

//array,Objects,functions

const heros = ["shaktiman","spiderman","ironman"]
let myObj={
    name:"roshan",
    age: 20,
}

const myFunction =function(){
    // console.log("Hello world");
}

// console.log(typeof bigNumber);


/*************************************/


//Stack(primitive), Heap(Non-primitive)

let myName = "roshankumar"


let anotherName = myName
 anotherName = "raunaqkumar"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}
let userTwo = userOne;
userTwo.email = "roshan@Gmail.com"

console.log(userOne.email)
console.log(userTwo.email)