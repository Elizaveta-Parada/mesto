export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupClButton = this._popup.querySelector('.popup__close');
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClosePopup);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClosePopup);
    }

    setEventListeners() {
        this._popupClButton.addEventListener('click', this._handlBtClosePopup);
        this._popup.addEventListener('click', this._handlCloseOverlay)

    }

    _handleEscClosePopup = (evt) => {
        if (evt.key === 'Escape') {
            this.closePopup();}
    }

    _handlBtClosePopup = () => {
        this.closePopup();
    }

    _handlCloseOverlay =(evt) => {
        if (evt.target === evt.currentTarget) {
            this.closePopup();}
    }

}