// window object

var windowObj = window;
windowObj = this;

var window = {
    alert: function (string) {
        console.log(string)
    }
}

window.alert('test')

var windowObj = window;
console.log(window.outerWidth)
console.log(outerHeight)

// window.addEventListener('resize', function(){
//   console.log(window.outerWidth)
//  console.log(outerHeight)
// })

var parent = document;
parent = document.all
parent = document.all.length;
parent = document.all[document.all.length -1];
parent = document.body;
parent = document.head;
parent = document.location;
parent = document.scripts;
parent = document.links[0].getAttribute('href')
parent = document.links[0].classList
parent = document.links[0].className
//parent = document.location.toString
// document.location.reload();
// parent = parent[5]

// FORMS

parent = document.forms;
parent = document.forms.length;
parent = document.forms[0].id;
parent = document.forms[0].method

console.log(parent)

//select elements with methods

/*
getElementById
*/

// getElementById method

var htmlElement;
htmlElement = document.getElementById('intecbrussel')

// by className

htmlElement = document.getElementsByClassName('btn')
htmlElement = document.getElementsByClassName('form-control')

// by tagName

htmlElement = document.getElementsByTagName('a')
htmlElement = document.getElementsByTagName('input')

// querySelector and querySelectorAll

htmlElement = document.querySelector('a.btn.btn-primary')
htmlElement = document.querySelector('input')
// htmlElement = document.querySelector('#intecbrussel')

//querySelectorAll

htmlElement = document.querySelectorAll('input');
htmlElement = document.querySelectorAll('a.btn.btn-primary')
htmlElement = document.querySelectorAll('#intecbrussel')

// htmlElement = htmlElement[1].value   staticway

htmlElement.forEach(function(element){
    console.log(element.value)

})

htmlElement = document.querySelectorAll('a.btn.btn-primary');
htmlElement.forEach(function(button){
    console.log(button)
    button.innerHTML = "Click"
    button.addEventListener('click', function () {
        console.log('this is just a test!!!!')
    })
})

console.log(typeof htmlElement)
console.log(htmlElement)