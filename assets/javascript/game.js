//set variables 
var randomMin = 19;
var randomMax = 120;
var randomNumber = 0;
var winGame = 0;
var loseGame = 0;
var score = 0;
var isGameOn = 0;
var gemRandom1 = 0;
var gemRandom2 = 0;
var gemRandom3 = 0;
var gemRandom4 = 0;


$( document ).ready(function() {    

    startGame();

    $("#gem1").on("click", function(){
        addScore(gemRandom1)
    });

    $("#gem2").on("click", function(){
        addScore(gemRandom2) 
    });
    
    $("#gem3").on("click", function(){
        addScore(gemRandom3)
    });
    
    $("#gem4").on("click", function(){
        addScore(gemRandom4)
    });



});

function changeVariables() {

    gemRandom1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    gemRandom2 = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
    gemRandom3 = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
    gemRandom4 = Math.floor(Math.random() * (12 - 10 + 1)) + 10;

}


function startGame() {

    changeVariables();
    $("#currentScore").html(score);

    randomNumber = Math.floor(Math.random() * (randomMax - randomMin + 1))+randomMin;
    var num = $("#random-number");
    num.text(randomNumber);
    score = 0;
    $("#currentScore").html(score);

    $("#wincount").html("Wins:" + " " + winGame);
    $("#losecount").html("Loses:" + " " + loseGame);


}

//add the number clicked to guessed number
function addScore(value) {
    score += value;
    $("#currentScore").html(score);
    isGameOver()
}

//Checking if game is on or over
function isGameOver() {
    if (score == randomNumber) {
        winGame++;
        startGame()
    }
    else if (score > randomNumber) {
        loseGame++;
        startGame()
    }
};

function addSound() {

}
 

   






















//4 crystals to act as buttons for function
// create values for crystals
// create random number for user to guess answer to and push to a div
//add amount of points to a (card) adding what user is clicking
// when it gets to the number stop (lose or win) and restart
//create a random number array to replace value of crystal each time it refreshes (function)
