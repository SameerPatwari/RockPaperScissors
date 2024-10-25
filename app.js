let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const generateCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = ()=>{
    console.log("Game was draw!");
    message.innerText = `Game was draw! Play Again`;
    message.style.backgroundColor = "Blue";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        //update user score
        userScore++;
        userScorePara.innerText = userScore;
        //update message
        console.log(`You Won!`);
        message.innerText = `You Won! Your ${userChoice} beats Computer's ${compChoice}.`;
        message.style.backgroundColor = "Green";        
    }
    else{
        //update computer score
        compScore++;
        compScorePara.innerText = compScore;
        //update message
        console.log(`You Lost!`);
        message.innerText = `You Lost! Computer's ${compChoice} beats your ${userChoice}.`;
        message.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice)=>{
    console.log(`User choice = ${userChoice}`);
    // generate computer choice
    const compChoice = generateCompChoice();
    console.log(`Comp choice = ${compChoice}`);

    if(userChoice == compChoice){
        // Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        // show the winner now
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});