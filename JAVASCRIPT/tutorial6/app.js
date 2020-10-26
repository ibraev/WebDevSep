let student = {
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
let _print = 'Fullname: ' + student.firstname + " " + student.lastname; //classic way
console.log(print)

let print = `
Fullname: ${student.firstname} ${student.lastname}
Is student passed the exam: ${student.isPassed}
Age: ${student.age}
Favorite Author: ${student.books.title}`//modern way
console.log(print)
student.showstudent();
