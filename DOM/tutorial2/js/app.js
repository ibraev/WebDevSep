// nevigation in dom three

var listofTodos =document.querySelector('.list-group')
var singleTodos = document.querySelector('.list-group-item:nth-child')
var nthChildsofTodos = document.querySelectorAll('.list-group-item:nth-child(event')

console.log(nthChildofTodos)
console.log(listofTodos)

console.log(singleTodos)

nthChildsofTodos.forEach(function (todo){
    todo.className="list-group"//// not finished line
})

// child nodels

var ConsoleResult;
ConsoleResult = listofTodos.childNodes[0]
ConsoleResult = listofTodos.childNodes[listofTodos.children.length-1]
console.log("Console Result>", ConsoleResult)

let arr = [1,2,3,4,5,6,7]
console.log(arr[2])
console.log(arr[arr.length-1])

ConsoleResult.innerHTML="This is todo title - new"

ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.children[1].textContent="Title has been updated";
ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.firstElementChild
ConsoleResult = CardBody[1];
//ConsoleResult = ConsoleResult.childElementCount;
// ConsoleResult = ConsoleResult.children.length;
// ConsoleResult = ConsoleResult.LastElementChild;

console.log(ConsoleResult)

// nextElementSibling

// ConsoleResult = singleTodo.nextElementSibling;

// previousElement

//ConsoleResult = singleTodo.previousElementSibling

ConsoleResult= singleTodo.nextElementSibling.nextElementSibling
ConsoleResult = singleTodo.previousElementSibling.previousElementSibling

console.log("Result", ConsoleResult)
