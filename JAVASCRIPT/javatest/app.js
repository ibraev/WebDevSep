
// let myImage = document.querySelector('img');
// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/memoire.png') {
//         myImage.setAttribute('src', 'images/calculmental.png')
//     } else {
//         myImage.setAttribute('src', 'images/memoire.png')
//     }
// }


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storeName;
}
myButton.onclick = function (){
    setUserName();
}