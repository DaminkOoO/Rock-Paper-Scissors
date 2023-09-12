const getComputerChoise = () => {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (randomNumber === 0)
        return "rock";
    
    else if (randomNumber === 1)
        return "paper";
    else
        return "scissors";
    
}
const playRound = (computerChoice, playerChoice) => {
    playerChoice = playerChoice;
    computerChoice = computerChoice;
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors")
        return "INVALID CHOICE!!!";
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
const game = () => {
    let playerChoice;
    let scoreP = 0, scoreC = 0;
    let winner;
    let tie = 0;
    let result;
    for (let i = 1; i < 6; i++){
        if (result === "Tie")
            i = tie;
        console.log("Round N°" + i);
        do {
            playerChoice = prompt("Choose rock/paper/scissors");
            playerChoice = playerChoice.toLowerCase().trim();
        } while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors");
        
        
        result = playRound(getComputerChoise(), playerChoice);
        console.log(result);
        winner = result.split(" ")[0];
        if (winner === "The")
            scoreC++;
        else if (winner === "You")
            scoreP++;
        else
            tie = i;
    }
    if (scoreC > scoreP)
        console.log("Computer is the Winner");
    else
        console.log("You are the winner!!!");
}
game();