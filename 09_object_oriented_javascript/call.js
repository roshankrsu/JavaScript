function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email =  email
    this.password = password
}

const zebra = new createUser("zebra", "zebra@fb.com", "234")

console.log(zebra);