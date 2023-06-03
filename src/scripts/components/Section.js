export default class Section {
    constructor({ renderer }, itemsContainer) {
        this._itemsContainer = document.querySelector(itemsContainer);
        this._renderer = renderer;
    }

    renderItems(res) {
        res.forEach(this._renderer);
    }

    addItem(domElement) {
        this._itemsContainer.prepend(domElement)
    }

    appendItem(domElement) {
        this._itemsContainer.append(domElement)
    }
}