/*
while
do while
for 
for/in
for/of
*/

/*
let student = [
    {name:"Michael", age:26},
    {name:"George", age:19},
    20,
    "test"
]
// console.log(student.length)

let i=0
*/

//while (i<=student.length){//condition
 //code
 //console.log(student[i])
 //i++;
//}

/*
while(i<100) {
    i++;
    if (i%2==0) {
        console.log(i)
    }
}
*/


/*
var answer;
var result=0;

while (answer%2!=0) {
    answer = prompt ('enter a number!');
    result += parseInt(answer);
    //result = result +parseInt(answer);
}
console.log(parseInt(result), "result")
*/

// do while loop

// do {
    //code block
// }while(condition)
/*
var i=50
do {
    console.log(i)
    i++;
} while (i<=10);

var randomNumber;

do {
    randomNumber = Math.floor(Math.random()*100)+1
    console.log(randomNumber)
} while(randomNumber>=50)

var number;
var sum = 0;
do{
    number=Number(prompt('enter a number!'))
    sum+=number;
    console.log("sum result=>", sum)
    console.log(number)
    console.log(number!=0)
}while(number!=0) 

*/
    //sign = Math.sign(number)

    //for (let i=0; i<=100; i+=3) {
    //    three.push(i*sign)
    //}
    //for (let i=0; i<=100; i+=5) {
    //    five.push(i * sign)
   // }

    
//var password = "123456"
//var rateLimit =3;

//while(rateLimit>0) {
 //   var askUserPassword = prompt ('enter your password')
 //   rateLimit--;
 //   if(askUserPassword==password){
  //      console.log('welcome user')
  //      break;
  //  }else {
  //      console.log(`you've ${reateLimit}attemps screenLeft.`)   
  //   }
  //   console.log(rateLimit)
  //   console.log(askUserPassword)
//}

// for loop
let i=0
for (i; i<=0; i++){
    var oddNumber = i%2;
    if(oddNumber !=0){
        console.log(i)
    }
}
for (let i=1; i<=100; i++) {
    let res=i*i;
    console.log(res)
}

let x,y
for(x=1, y=50; x<=10 && y>=50; i++) {
    console.log(x,":", y)
    y++
}

var x,y;
for(x=9; x<=10; x++) {
    for(y=1; y<=10; y++){
         var result = `${x} * ${y}=${x*y}`
         console.log(result)
    }
}