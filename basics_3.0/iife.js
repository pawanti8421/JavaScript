// Immediately Invoked Function Expressions (IIFE)
// some time there is problem with global scope pollution, so that global scopes variables or any declaration's pollutions to remove we use iife


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
})();

// ()(). //in first '()' we write definition and in 2nd '()' it is used for execution call


((name) => {
    console.log(`db connected two ${name}`);
    
})("Pawan");

(function aurcode(name){
    console.log(`db connected three ${name}`);
    
})("Pawan");