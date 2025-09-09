// Immediately Invoked Function Expressions (IIFE)

(function damn(){
     //named IIFE 
    console.log(`DB CONNECTED`);
})();

( (name) => {
     console.log(`DB CONNECTED TWO ${name}`)   
})(`roshan`)