export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close');
        this._form = this._popup.querySelector('.popup__form');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', this._handleCloseButtonClick);
        this._popup.addEventListener('click', this._handleCloseOverlay)

    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();}
    }

    _handleCloseButtonClick = () => {
        this.close();
    }

    _handleCloseOverlay =(evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();}
    }

}