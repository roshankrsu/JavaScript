const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cyptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
     console.log('Async task 2');
     resolve()
    },1000)


}).then(function(){
    console.log("Async 2 resolved"); 
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "roshan", email: "roshan@example.com"})
    },1000)
})

promiseThree.then(function(user){
  console.log(user)  
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
         resolve({username:"roshan",password:"923u290"})
        }else{
          reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
         console.log(user);
         return user.username
}).then((username) =>{
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve, reject){
setTimeout(function(){
        let error = false;
        if(!error){
         resolve({username:"javascript",password:"923u290"})
        }else{
          reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    const responce = await promiseFive
    console.log(responce);
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
       
//        const data = await responce.json()
//        console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/roshankrsu')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))