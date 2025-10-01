// let myName = "roshan     ";
// let myCar = "mercedes     "

//  console.log(myName.trim().length); //bad way too remove spaces

// console.log(myName.trueLength());

let myPet = ["dog","cat"]

let favFood ={
    dog: "pedigree",
    cat: "fish",

    getCatFood: function(){
        console.log(`cat favirote is ${this.cat}`);
    }
}

Object.prototype.rabbit = function(){
    console.log(`rabbit is present in all objects`);
}

Array.prototype.heyRoshan = function(){
    console.log("ros says hello");
}

// favFood.rabbit()
// myPet.rabbit()
// myPet.heyRoshan()

const User = {
    name: "roshan",
    email: "roshankrsu@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
      makeAssignment: 'JS assignment',
      fullTime: true,
      __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername  = "roshan    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"roshan".trueLength()
"iceTea".trueLength()