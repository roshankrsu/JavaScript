// const discordUser = new Object() //singleton object
const discordUser = {} //non singleton object

discordUser.id = "123abc"
discordUser.name = "fannekhan"
discordUser.isLoggedIn = true

// console.log(discordUser);

const regularUser = {
    email: "ros@yahoo.com",
    fullname: {
        userfullname: {
            firstname: "roshan",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "c", 4: "d"}
 const obj4 = {5: "e", 6: "f"}

// const obj3 =  { obj1, obj2 }
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },

]

users[1].email
// console.log(discordUser);

// console.log(Object.keys(discordUser));
// console.log(Object.values(discordUser));
// console.log(Object.entries(discordUser));

// console.log(discordUser.hasOwnProperty('isLoggedIn'));


const concert = {
    genre: "Hip hop",
    rappername: "SeedheMaut",
    ticketprice: "999"
}

// concert.rappername

const {rappername: rapper} = concert

//console.log(rappername)
console.log(rapper)

// {
//     "name": "roshan"
//     "course": "Computer science"
//     "session": "2023-2026"
// }

[
    {},
    {},
    {}
]

