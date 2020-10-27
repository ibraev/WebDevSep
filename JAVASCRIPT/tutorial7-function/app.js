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

function getUser (userObj) {
    return userObj.firstname;
}

let student ={
    firstname:'Jack',
    lastname: 'Sparrow'
}

let showUserName = getUser(student);

console.log("GetUserFunction says:".showUserName)

//CTRL+ K + C > comment it
//CTRL + K+ U > uncomment it

let autoDrive = {
    forward:function(){console.log('FOrward')},
    backward: function() {console.log('Backward')},
    turnLeft: function () {console.log('Turn Left')},
    turnRight: function () {console.log('Turn Rigth')}
}

autoDrive.turnLeft();
autoDrive.backward();
autoDrive.turnRight();
autoDrive.forward();

// local variables
// let localVariable = 'This is not a local variable';

function printService () {
    let localVariable ='This is a local variable';// can access only in function
    console.log(localVariable)
}

printService();

// console.log(localVariable)

// global variable

let GlobalVariable ='This is a global variable';

function COnsoleService () {
    console.log(GlobalVariable)
}
COnsoleService();

function IntecBrussel(firstname, lastname, age, email, password) {
    console.log(firstname, lastname, age, email, password)
}

IntecBrussel('Jack', 'Jone', 25 , 'root@root.com', 'bsqkvjbvk:1557828');



function PersonalInfo (bardak) {
    console.log(bardak.firstname)

}

PersonalInfo(student);

// object

let personal = {
    firstname: 'jack'
}
let teacher = {
    firstname:'Mikail'
}

function testFunction(myParameterName) {
     // let myParameterName = personal;
     console.log(myParameterName.firstname)
     console.log(myParameterName)
}

testFunction(personal);
// test with local variable

function testFunction1(elnura) {
        console.log(elnura.firstname)
}

testFunction1('elnura');

// about personal info

let _student = {
    scores:[50,60,70,80,90,100],//array
    firstname:"jack",//string
    lastname:"Sparrow",//string
    isPassword:true,//boolean
    age:25,//number
    showstudent: function () { //function
        console.log('this is show student function')
    },
    books:{
        category:"Philosophy",
        title:"Netztsche"
    }
}

console.log(student.score)
/*let print = `
Fullname: ${student.firstname} ${student.lastname}
Is student passed the exam: ${student.isPassed}
Age: ${student.age}
Favorite Author: ${student.books.title}`//modern way
//console.log(print)
student.showstudent();
//console.log(print)
*/