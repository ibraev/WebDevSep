//functions

//function syntax
function myFunctionName() {
    console.log('before return: function message')
    return 'this is my first function' //after return we can not execute other function
}

console.log(myFunctionName); //invoked

function calculateIt(a,b) {
    console.log(a,b)
    return a+b;
}

// calculateIt(5,"Jack");
 
let sunResult = calculateIt (5,6);
console.log(sunResult);


