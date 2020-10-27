
// 3 function

//function1 init object
//function2 add properties (fullname, age email)
//function3 printerService print info in this function

//function3 collapse function2 collapse function
//function3>function2>function1 > result

// object

let person = { 
    name: 'John', 
    age: 20, 
    email: 'erfer@gmail.com'
};

// accessing property
console.log(person.name); 
//John

document.getElementById("test1").innerHTML = `${person.name} is ${person.age} years old. His email: ${person.email}.`;
