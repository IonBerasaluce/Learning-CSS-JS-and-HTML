let userScore = 0;
let computerScore = 0;

// These are dom variables HTML variables that store dom elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function resultMessage(userChoice, winLoss){
    switch (winLoss + userChoice){
        case "wr": 
            result_p.innerHTML = "Rock breaks scissors. You win!";
            break;
        case "wp":
            result_p.innerHTML = "Paper covers rock. You win!";
            break;
        case "ws":
            result_p.innerHTML = "Scissors cut paper. You win!";
            break;
        // Losses
        case "lr":
            result_p.innerHTML = "Paper covers rock. You loose!";
            break;    
        case "lp":
            result_p.innerHTML = "Scissors cut paper. You loose!";
            break;
        case "ls":
            result_p.innerHTML = "Rock breaks scissors. You loose!";
            break;    
    }
}

function win(userChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    resultMessage(userChoice,"w");
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 500);
}

function lost(userChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    resultMessage(userChoice,"l");
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 500);
}

 function draw(userChoice){
    result_p.innerHTML = "It's a tie!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 500);
 }


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        // case when the user looses 
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice)
            break;
        // cases when the user wins
        case "pr":
        case "sp":
        case "rs":
            win(userChoice);
            break;
        default:
            draw(userChoice);     
    }
}

function main(){
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissor_div.addEventListener("click", () => game("s"));
}

main()