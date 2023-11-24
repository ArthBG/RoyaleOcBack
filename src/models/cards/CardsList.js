export class CardList {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    getCard(id) {
        return this.cards.find(card => card.id === id);
    }

    getCards() {
        return this.cards;
    }

    removeCard(id) {
        this.cards = this.cards.filter(card => card.id !== id);
    }

}