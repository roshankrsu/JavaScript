class User {
    constructor(username){
        this.username = username
    }
logMe(){
    console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const ros =  new Teacher("ros","ros@mail.com", "123")

ros.logMe()
const food = new User("rice")

food.logMe()

console.log(ros instanceof User)