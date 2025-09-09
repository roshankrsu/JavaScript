// singleton
// Object.create

// object literals

const mySym = Symbol("key1")



const jsUser = {
    name: "Roshan",
    "full name": "Roshan Kumar",
    mySym: "mykey1",
    age: "20",
    location: "ranchi",
    email: "roshankrsu@gmail.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "roshan@yahoo.com"
// Object.freeze(jsUser)
jsUser.email = "roshan@outlook.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())