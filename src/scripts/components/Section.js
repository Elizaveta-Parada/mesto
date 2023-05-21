export default class Section {
    constructor({ items, renderer }, itemsContainer) {
        this._itemList = items;
        this._itemsContainer = document.querySelector(itemsContainer);
        this._renderer = renderer;
    }

    renderItems() {
        this._itemList.forEach(item => {
         this._renderer(item)
        });
    }

    addItem(domElement) {
        this._itemsContainer.prepend(domElement)
    }

}