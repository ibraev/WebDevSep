let button = document.getElementById('diceRollerbutton');
const diceOne = document.getElementById('placeholder1');
const diceTwo = document.getElementById('placeholder2');
let textPlayer = document.getElementById('textPlayer');

//function change dice

function changeDice() {
    const firstRandomDice = Math.floor(Math.random() * 6) + 1;
    const secondRandomDice = Math.floor(Math.random() *6) +1;
    diceOne.innerHTML =`<img src="assets/dice${firstRandomDice}.png">`;
    diceTwo.innerHTML = `<img src= "assets/dice${secondRandomDice}.png">`;
    if (firstRandomDice > secondRandomDice) {
        textPlayer.innerHTML = `First Player Wins`;
    } else {
        textPlayer.innerHTML =`Second Player Wins`;
    }
}

button.addEventListener('click', changeDice);