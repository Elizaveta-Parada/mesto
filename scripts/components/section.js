export default class Section {
    constructor({ items, renderer }, cardsContainer) {
        this._card = items;
        this._cardsContainer = document.querySelector(cardsContainer);
        this._renderer = renderer;
    }

    renderItems() {
        this._card.forEach(item => {
          this.addItem(this._renderer(item))
        });
    }

    addItem(element) {
        this._cardsContainer.prepend(element)

    }

}