

checkAnswer.addEventListener('click', function (e) {​​​​

    e.preventDefault();

    let temp_answer = eval(question.innerText) // correct answer

    if (Math.round(temp_answer) == answer.value) {​​​​

        count_correct++; // score increase

        console.log(count_correct)

        Score_Correct.innerText = count_correct;

        newQuestion(); // Next question after correct answer.

    }​​​​else{​​​​

        count_incorrect++;

        Score_incorrect.innerText = count_incorrect;

    }​​​​
}​​​​)
function newQuestion() {​​​​

    let math_opt = ["+", "-", "*", "/"]; // math operators

    opt = math_opt[randomQuestion(0, 4)]; // random math operator

    n1 = randomQuestion(0, 20) // random number between 0-50 for first number

    n2 = randomQuestion(0, 20) // random number between 0-50 for second number



    question.innerHTML = `${​​​​.randomQuestion(0, 50)}​​​​${​​​​opt}​​​​${​​​​randomQuestion(0, 50)}​​​​`



}​​​​

