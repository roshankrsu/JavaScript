class User {
    constructor(username){
        this.username = username
    }
     
    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}



const roshan =  new User("roshan")
// console.log(roshan.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const book = new Teacher("book", "b@book.com")
book.logMe()