// selectors

// Access all the cards.
const cards = document.querySelectorAll('.memorycard');

// To ensure card has flipped.
let hasFlipped=false;

// To ensure board is locked.
let lockBoard=false;

let firstCard,secondCard;

// ---------------------------------------

// functions

//FlipCard () method invoked after clicking each card. 
function flipCard() {
 
  // console.log(this)
  if(this=== firstCard) return;

if(lockBoard) return;

this.classList.add('flip');

if(!hasFlipped){
    // first card flipped
    hasFlipped=true;
    firstCard=this;
    // console.log({firstCard,hasFlipped});
    return ;
  }

    // second card flipped
    hasFlipped=false;
    secondCard=this;
    // console.log({secondCard,hasFlipped});
      // console.log(firstCard.dataset.framework);
      // console.log(secondCard.dataset.framework);
      checkForMatch();
}

// checkForMatch()to check if both cards matched.
function checkForMatch(){
  // check both cards framework value.
  let isMatch=(firstCard.dataset.framework===secondCard.dataset.framework);
  // IF its a match disable otherwise unflipcards back again.
  isMatch ? disableCards() : unflipCards();
}

// disableCards() invoked if the both cards matched.

function disableCards(){
  // The EventTarget.removeEventListener() method removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click',flipCard);
  resetBoard();
}

// If cards doesnt matched ,unflip cards back again.
function unflipCards(){
  lockBoard=true;
  setTimeout(()=>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
    },1500);
    // console.log(firstCard);
    // console.log(secondCard);
}

//this method will reset the game.
function resetBoard(){
  [hasFlipped,lockBoard]=[false,false];
  [firstCard,secondCard]=[null,null];
}

//Shuffling of cards.
(function shuffle() {
  cards.forEach(card => {
    //it generates random number btw 1 to 12.
    let randomPos = Math.floor(Math.random() * 12);
    //set it as position/order of cards.
    card.style.order = randomPos;
  });
})();

// ---------------------------------------

// event listener

// On clicking each card , flipcard()method called.
// here card is temporary variable to access each card seperately.
cards.forEach(card => card.addEventListener('click', flipCard));