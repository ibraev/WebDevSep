// JAVASCRIPT-VARIABLES

/*
VAR variable
    re-update
    re-declare
*/
var intecbrussel=1;
var intecbrussel="This is string"
var intecbrussel=true;

console.log(intecbrussel)

/* _$ 5  it is not recommended but its working*/

var $intecbrussel="this is special char"
console.log($intecbrussel)
//to use special charecteristics is not recommended.

intecbrussel ={
    title:"this is title"
}

intecbrussel=[1,2,3,4,5,6,7,8,9]

console.log(intecbrussel)
console.log(typeof intecbrussel)

// another variable

var test1;
test1=intecbrussel

test=function myfunction(){return 1}
console.log(typeof test1)

/* let variable
    re-update*
*/
let test = 5;
test=9;
// let test="this is new value"-not working
console.log(test)

//let only re-update
//var re-update and re-declare
//const

//const variable - can not update

const NewVariable="This is static variable"
//NewVariable="update it!"
//const NewVariable="This is not static?"
console.log(NewVariable)