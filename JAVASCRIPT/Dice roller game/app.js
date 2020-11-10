// Generate a random number from 1 to 6

const firstRandomNum = Math.floor(Math.random() *6) +1

//images/dice4.png upto images/dice6.png
const firstDiceImage.src= "assets/dice" + firstDiceImage + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

// Generate a random number from 1 to 6

const secondRandomNum = Math.floor(Math.random() *6) +1

//images/dice4.png upto images/dice6.png

const secondDiceImage.src = "assets/dice" + secondDiceImage + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

// logic for winner

if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML='The Winner is user 1';
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 2';

} if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML= "It's a Draw!";
}