import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupTitle = this._popup.querySelector('.popup__title-image');
    }

    open = (cardDate) => {
        this._popupTitle.textContent = cardDate.title;
        this._popupImage.src = cardDate.link;
        this._popupImage.alt = cardDate.title;
        super.open();
    }
}