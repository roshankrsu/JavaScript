const userEmail = []

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values

// "0", 'false', " ", [], {}, functin(){}

// if (userEmail.length === 0){
//     console.log("array is empty"); 
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
     console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")