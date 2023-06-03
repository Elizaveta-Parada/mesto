import Popup from "./Popup";

export default class PopupDeleteImage extends Popup {
    constructor(popupSelector, handleDelete) {
        super(popupSelector);
        this._handleDelete = handleDelete;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDelete({ imageObject: this._imageObject, cardId: this._cardId });
        })
    }

    open = ({ imageObject, cardId }) => {
        super.open();
        this._imageObject = imageObject;
        this._cardId = cardId;
    }
}