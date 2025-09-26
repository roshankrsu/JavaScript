function multiplyBy5(num){
        return num*5
}

multiplyBy5.power = 11;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++
}

const roshan = createUser("roshan", 21)
const tyler = createUser("tyler", 34)

