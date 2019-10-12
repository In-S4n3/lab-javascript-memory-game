class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = Number();
    this.pairsGuessed = Number();
  }
  shuffleCards() {
    
  }


  checkIfPair(card1, card2) {
    
    this.pairsClicked += 1;

    if(card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    let gamePairs = this.cards.length / 2;
    if (this.pairsGuessed < gamePairs) {
      return false;
    } else if (this.pairsGuessed === gamePairs) {
      return true;
    }
  }
}