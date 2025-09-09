const user = {
    username: "roshan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function damn(){
//     let username = "roshan"
//     console.log(this.user);
// }

// damn()

// const damn = function (){
//     let username  = "roshan"
//     console.log(this.username);
// }

//++++++++++++++++explicit return+++++++++

const damn = () => {
    let username  = "roshan"
    console.log(this);
}


// damn()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//++++++++ implicit return++++++++++++
// const addTwo = (num1, num2) =>   num1 + num2

// const addTwo = (num1, num2) =>   (num1 + num2)

const addTwo = (num1, num2) =>   ({username: "roshan"})


console.log(addTwo(2,9))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()