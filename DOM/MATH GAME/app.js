
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


checkAnswer.addEventListener('click', function (e) {​​
        e.preventDefault();   
     let temp_answer = eval(question.innerText) 
    // correct answer    if (Math.round(temp_answer) == answer.value) {​​  
          count_correct++; // score increase       
     console.log(count_correct)       
     Score_Correct.innerText = count_correct;    
        newQuestion(); // Next question after correct answer.   
 }​​else{​​        
    count_incorrect++;      
      Score_incorrect.innerText = count_incorrect;   
 }​​}​​)
function newQuestion() {​​

    let math_opt = ["+", "-", "*", "/"]; // math operators

    opt = math_opt[randomQuestion(0, 4)]; // random math operator

    n1 = randomQuestion(0, 20) // random number between 0-50 for first number

    n2 = randomQuestion(0, 20) // random number between 0-50 for second number



    question.innerHTML = `${​​.randomQuestion(0, 50)}​​${​​opt}​​${​​randomQuestion(0, 50)}​​`



}​​

