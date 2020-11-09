// Array methods

let myNumberArray=[1,2,3,4,5,65,77,88,44,33,34,5,4,99];
let myStringArray= ["Comedy", "Horror", "Action", "Thriller", "Sci-fi", "Fantasy"];
let student = [
    {fullname:"Jack Sparrow", age:25, profession:"Pirate"},
    {fullname:"Marisol R. Tyler", age:27, profession:"Developer"},
    {fullname:"Jack Sparrow", age:22, profession:"Police"},
    {fullname:"Thomas S. Digirolamo", age:21, profession:"Doctor"},
]

//method:push


//myNumberArray.push(1000);
myStringArray.push("Drama");
console.log(myStringArray);

//method: join

// console.log(myStringArray.join("/"))

//method:pop

myStringArray.pop();
console.log(myStringArray);
//student.pop();

//method shift()

myStringArray.shift();
myStringArray[0]= "Documentary"
console.log(myStringArray);

// method some()

function someFunction(value) {
    return value>=100
}
let some_Result= myNumberArray.some(someFunction);
console.log(some_Result)

//method: every()

//myNumberArray = [44,44,44];

function everyFunction(value) {
    return value>=44
}
 let every_result = myNumberArray.every(everyFunction)
 console.log(every_result)

 /*method: reduce()
 The reduce() method reduces the array to a single value.
    accumulator
    currentValue
    currentIndex
    arrayItself
*/

function reduceFunction(accumulator, currentValue, currentIndex){
    console.log(currentIndex)
    return ´]
}