// html elements (inputs)


var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var result = document.getElementById ('result');


function submit1() {
    //console.log(num1.value)
    //console.log(num2.value)
    console.log(Number(num1.value)+Number(num2.value))
    
    return result.innerText= `Result> ${Number(num1.value) + Number(num2.value)}`;
}
