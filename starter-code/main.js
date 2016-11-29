// Four cards, 2 x queen and 2 x king

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//Loop, if cards have the same value then alert "You found a match!" Otherwise alert "Sorry, try again."
if (cardTwo === cardFour || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree){
	alert("Sorry, try again.");
} else if (cardOne === cardTwo){
	alert ("You found a match!");
	else (cardThree === cardFour){
	alert("You found a match!");
}
