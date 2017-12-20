var choices = ["rock" , "paper" , "scissors"];
/*global $*/

// this happens when the script loads.  Page loads
console.log("Loaded");

$(document).ready(function() {
    // this happens when jquery loads

    console.log("Works");
    
    $("#blueButtonRock").click(function() {
        // this happens when I click rock
        runRPS("rock");
    });
    
    $("#yellowButtonScissor").click(function() {
        // this happens when I click scissor
        runRPS("scissors");
    });
    
        $("#greenButtonPaper").click(function() {
        // this happens when I click paper
        runRPS("paper");
    });
    
});

        var userWinCount = 0;
        var computerWinCount = 0;
        var maxPoints = 10;

function runRPS(userInput) {
        $('#userChoice').html(userInput); // div hold user choice only on ui
        var index = Math.floor(Math.random()*choices.length);
        var computerChoice = choices[index];
        console.log("computerChoice is " + computerChoice);
        $('#computerChoice').html(computerChoice);
       
        var userChoice = userInput;
        console.log("userChoice is " + userChoice);
        
        if (userChoice == computerChoice){
                console.log("Tie");
                 $('#winner').html("Tie");
        } else if ((userChoice == "scissors" && computerChoice == "rock") || // && (and) = both statements have to be true
                   (userChoice == "rock" && computerChoice == "paper") || // || (or) = one has to be false to be false entirely
                   (userChoice == "paper" && computerChoice == "scissors")) {
                computerWinCount++;
                console.log("computer win count", computerWinCount);
                console.log("Computer Wins");
                $('#winner').html("Computer Wins!!");
        } else {
                console.log("User Wins!!");
                userWinCount++;
                console.log("user win count", userWinCount);
                $('#winner').html("User Wins!!");
        }
        
        //  if (computerWinCount == maxPoints){
        //         $("#blueButtonRock") 
        //         .css( "visibility", "hidden" )
        // } 
        $('#resultCounts').html("User: " + userWinCount + "&nbsp;&nbsp;Computer: " + computerWinCount);
}

//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION

