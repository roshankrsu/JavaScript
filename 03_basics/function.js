 function sayMyName(){
     console.log("Roshan")
 }

// sayMyName() //to execute

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
 function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2    
}

const result = addTwoNumbers(5,6);

// console.log("Result: ", result)


function loginUserMessage(username = "roshan"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("roshan"))
// console.log(loginUserMessage("mohit"))

function calculateCartPrice(va1,val2,...num1){
      return num1
}

// console.log(calculateCartPrice(33,53,23,42));

const user = {
    username: "roshan",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 200
})

const myNewArray = [200, 44, 534, 43]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))