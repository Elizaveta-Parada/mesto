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
            this._handleDelete(this._imageObject);
        })
    }

    openPopup = (imageObject) => {
        super.openPopup();
        this._imageObject = imageObject;
    }
}