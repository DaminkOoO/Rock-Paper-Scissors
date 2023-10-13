const getComputerChoise = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0)
        return "rock";

    else if (randomNumber === 1)
        return "paper";
    else
        return "scissors";

}
const playRound = (computerChoice, playerChoice) => {

    console.log("The computer choice = " + computerChoice + "\n Your choice is = " + playerChoice + "\n");
    if (playerChoice === computerChoice)
        return "Tie";
    else {
        if (playerChoice === "paper" && computerChoice === "rock")
            return "You are the winner paper > rock";
        if (playerChoice === "rock" && computerChoice === "scissors")
            return "You are the winner rock > scissors";
        if (playerChoice === "scissors" && computerChoice === "paper")
            return "You are the winner scissors > paper";

        if (computerChoice === "paper" && playerChoice === "rock")
            return "The computer is the winner paper > rock";
        if (computerChoice === "rock" && playerChoice === "scissors")
            return "The computer is the winner rock > scissors";
        if (computerChoice === "scissors" && playerChoice === "paper")
            return "The computer is the winner scissors > paper";
    }
}

const reRenderResultComponent = () => {
        let resultContainerDOM = document.querySelector(".result-container");
        resultContainerDOM.remove();
        let resultContainer = document.createElement("div");
        resultContainer.classList.add("result-container");
        let span = document.createElement("span");
        span.classList.add("result-span");
        resultContainer.appendChild(span);
        let resultSpan = document.createElement("span");resultSpan.setAttribute('id', 'result');
        resultContainer.appendChild(resultSpan);
        document.querySelector(".score-container").appendChild(resultContainer);
        span.textContent = "Result: ";
        resultSpan.textContent = ""

        resultContainerDOM.remove();
    }


let scoreP = 0;
let scoreC = 0;
let scoreContainer = document.querySelector(".score-container");
//set the score to 0 for both the computer and the player
const setScore = () => {
    scoreContainer.childNodes[1].childNodes[1].textContent = scoreC;
    scoreContainer.childNodes[3].childNodes[1].textContent = scoreP;
}

window.onload = () => {

    setScore();
}


const getWinner = (str) => {
    if (str.split(" ")[0] === "The")
        return "c"; // c means the computer
    else
        return "p"; //p means the player

}


const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.choice');
let roundPlayed;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (scoreC < 5 && scoreP < 5) {
            const resultContainer = document.querySelector(".result-container");
            roundPlayed = playRound(getComputerChoise(), button.id);
            document.getElementById("result").textContent = roundPlayed;
            resultContainer.style.cssText = "display:inline;"
            if (getWinner(roundPlayed) === 'c') {

                scoreC++;
                setScore();
                if (scoreC === 5) {

                    resultContainer.textContent = "You LOST!";
                }
            } else {
                if (getWinner(roundPlayed) === 'p') {
                    scoreP++;
                    setScore();
                    if (scoreP === 5) {
                        resultContainer.textContent = "You WIN!";
                    }
                }

            }
        }


    });
});
document.querySelector("#replay").addEventListener('click', () => {
    scoreC = 0, scoreP = 0;
    setScore();
    reRenderResultComponent();
});