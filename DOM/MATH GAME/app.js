
// let operators = ["+","-","*","/"]
// operators[Math.round(Math.random()*4)+1]
// operators[Math.random(Math.random()*3)]
//  var number1 = 5
//  var number2 = 10
// function mathgame(){

// }
//  number1+ operators[Math.round(Math.round())*3)] number2
//  "5-10"
//  eval(number1 + operators[Math.round(Math.round()*3)] +number2)

 ////
 
 let n1= Math.floor(Math.random()*20+1);
 let n2= Math.floor(Math.random()*20+1);

 document.getElementsById("firstnumber").value = n1; // suroo1
 document.getElementsById("secondnumber").value = n2; // suroo2
let adds = n1 + n2;

function Game() {
    var user = document.getElementsById("answer".value);
    if (user == adds){
        document.getElementsById("question").innerHTML = "Well Done! Your Answer id Correct";
    } else {
        document.getElementsById("question").innerHTML = "Correct Answer" + adds + " . Try Again";
    }
    var user = document.getElementsById("question".value) = "";

    n1= Math.floor(Math.random()*20+1);
    n2= Math.floor(Math.random()*20+1);

 document.getElementsById("firstnumber").value = n1; // suroo1
 document.getElementsById("secondnumber").value = n2;
 adds = n1 + n2;
}




// let n1= Math.floor(Math.random()*20+1);
//  let n2= Math.floor(Math.random()*20+1);

//  document.getElementsById("intext").value = n1; // suroo1
//  document.getElementsById("intext1").value = n2; // suroo2
// let adds = n1 + n2;
// function Game() {
//     var user = document.getElementsById("answer".value);
//     if (user == adds){
//         document.getElementsById("question").innerHTML = "Well Done! Your Answer id Correct";
//     } else {
//         document.getElementsById("question").innerHTML = "Correct Answer" + adds + " . Try Again";
//     }
//     var user = document.getElementsById("question".value) = "";

//     n1= Math.floor(Math.random()*20+1);
//     n1= Math.floor(Math.random()*20+1);

//  document.getElementsById("intext").value = n1; // suroo1
//  document.getElementsById("intext1").value = n2;
//  adds = n1 + n2;
// }