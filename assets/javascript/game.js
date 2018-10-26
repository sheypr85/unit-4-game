

$( document ).ready(function() {
    
//set variables 
var randomMin = 19;
var randomMax = 120;
var isGameOn = false;
var wins = 0;
var loses = 0;
var score = 0;
$("#currentScore").html(score);
//4 crystals to act as buttons for function
// create values for crystals
// create random number for user to guess answer to and push to a div
//add amount of points to a (card) adding what user is clicking
// when it gets to the number stop (lose or win) and restart
//create a random number array to replace value of crystal each time it refreshes (function)

    var num = Math.floor(Math.random() * (randomMax - randomMin + 1))+randomMin;
    var randomNumber = $("#random-number");
    randomNumber.text(num);
    $("#number-selector").prepend(randomNumber);


    //Sets a random number to gem1; 
    var gemRandom1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    $("#gem1").prepend(gemRandom1);
    $("#gem1").on('click', function(){
        
    });
 
    //sets random number to gem2:
    var gemRandom2 = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
    $("#gem2").prepend(gemRandom2);
    console.log(gemRandom2)

    //sets random number to gem3;
    var gemRandom3 = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
    $("#gem3").prepend(gemRandom3);
    console.log(gemRandom3)

    //sets random number to gem4;
    var gemRandom4 = Math.floor(Math.random() *(12 - 10 + 1)) + 10;
    $("#gem2").prepend(gemRandom4);
    console.log(gemRandom4)










































});
