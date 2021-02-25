
// GAME FUNCTION
const game = () => {
    let pscore = 0;
    let cscore = 0;
    // Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play Match
    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const player_hand = document.querySelector(".Player-hand");
        const computer_hand = document.querySelector(".Computer-hand");

        // Computer options
        const computerOptions = ["rock", "paper", "scissor"];


        options.forEach((option) => {
            option.addEventListener("click", function () {

                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);

                computerChoice = computerOptions[computerNumber];


                // Here is where we compare hands...
                playerChoice = this.textContent;
                compareHands(playerChoice, computerChoice);
                
                // Here is where we update score...
                updateScore(pscore, cscore);

                // Update images
                player_hand.src = `${this.textContent}.png`;
                computer_hand.src = `${computerChoice}.png`;


            });
        });

    };

    // UPDATE SCORE FUNCTION
    const updateScore = () => {
        const playerScore = document.querySelector(".player_score p");
        const computerScore = document.querySelector(".computer_score p");
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;

    }

    // COMPARE HAND FUNCTION
    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector(".winner");

        // Checking for a tie...
        if (playerChoice === computerChoice) {
            winner.textContent = `It is a tie...`;
            return;
        }

        // Check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissor") {
                winner.textContent = `yahh !!! Player wins..`;
                pscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = `Huhh !!! Player looses...`;
                cscore++;
                updateScore();
                return;
            }
        }

        // Check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissor") {
                winner.textContent = `Huhh !!! Player looses...`;
                cscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = `yahh !!! Player wins..`;
                pscore++;
                updateScore();
                return;
            }
        }

        // Check for scissor
        if (playerChoice === "scissor") {
            if (computerChoice === "rock") {
                winner.textContent = `Huhh !!! Player looses...`;
                cscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = `yahh !!! Player wins..`;
                pscore++;
                updateScore();
                return;
            }
        }


    }
    // Call all inner functions...
    startGame();
    playGame();

};
// Start game function...
game();