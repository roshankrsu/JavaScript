const user = {
    username: "roshan",
    LoginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details from database");
        // console.log(`username: ${this.username}`)
        console.log(this);
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this

}

const userOne = new User("roshan", 9, true)
const userTwo = new User("Udit", 4, false)

console.log(userOne.constructor)
console.log(userTwo)
