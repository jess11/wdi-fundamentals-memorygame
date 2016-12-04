// Four cards, 2 x queen and 2 x king

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

/*Loop, if cards have the same value then alert "You found a match!" Otherwise alert "Sorry, try again."
if (cardTwo === cardFour || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree){
	alert("Sorry, try again.");
} else if (cardOne === cardTwo){
	alert ("You found a match!");
	else (cardThree === cardFour){
	alert("You found a match!");
}
*/


/*var createCards = function(cardNumbers){

	for (var i = 0; i < cardNumbers; i++){
	var gameBoard = document.getElementById('game-board');
	var newCard = document.createElement('div');
	newCard.className= 'card';
	gameBoard.appendChild(newCard);
};
}*/

// test if 2 cards in play are a match

/*	if (cardTwo === cardFour || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree){
	alert("Sorry, try again.");
} else if (cardOne === cardTwo){
	alert ("You found a match!");
	else (cardThree === cardFour){
	alert("You found a match!");
	}
} 
createCards(4);
*/

//cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

//cards in play
var cardsInPlay =[];

//board
var board= document.getElementById('game-board');


//cards flipped
var cardsFlipped = 0;

//score
var score = 0;

//create the board
var createBoard = function (){
	for (var i = 0; i< cards.length; i++){
		//create cards
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		//loop through cards and assign value eg king, queen 
		cardElement.setAttribute('data-card', cards[i]);
		//add click event listener to run isTwoCards function
		cardElement.addEventListener('click', isTwoCards);

		//append card to board
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}

	
}
var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	//shows card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML= "<img src='king.png'>";
	}  else {
		this.innerHTML= "<img src='queen.png'>";
	}


	//check to see if 2 cards are in play
	if(cardsInPlay.length === 2) {
		//pass cards in play in function isMatch
		isMatch(cardsInPlay);
		//clear cards in play for next try
		cardsInPlay = [];
	}
}

function isMatch (cards){
	//alert winning message
	if(cards[0] === cards [1]) {
		cardsFlipped += 2;
		score +=1
		alert("You found a match!");
		
	}	else {
		cardsFlipped += 2;
		alert ("Sorry, try again.");
	}


	
if (cardsFlipped === 4) {
		alert("You guessed " + score + " matches correctly.");
		board.innerHTML="";
		cardsFlipped = 0;
		score = 0;
		createBoard();
	}
}

	

createBoard();



