/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

function getDeck() {
  const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      let val = 0;
      let displayVal = value;
      if (value === 'Jack' || value === 'Queen' || value === 'King') {
        val = 10;
      } else if (value === 'Ace') {
        val = 11;
      } else {
        val = parseInt(value);
      }

      const card = {
        suit: suit,
        displayVal: displayVal,
        val: val,
      };

      deck.push(card);
    }
  }

  return deck;
}

const deckOfCards = getDeck();
console.log(deckOfCards);

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);