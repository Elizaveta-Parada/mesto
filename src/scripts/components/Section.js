export default class Section {
    constructor({ items, renderer }, itemsContainer) {
        this._itemList = items;
        this._itemsContainer = document.querySelector(itemsContainer);
        this._renderer = renderer;
    }

    renderItems() {
        this._itemList.forEach(element => {
         this._renderer(element)
        });
    }

    addItem(data) {
        this._itemsContainer.prepend(data)
    }

}