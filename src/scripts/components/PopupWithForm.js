import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._sendButton = this._form.querySelector('.popup__submit-btn');
        this._sendButtonText = this._sendButton.textContent;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => { 
            evt.preventDefault();
            // this.renderLoading();
            this._handleSubmit(this._getInputValues());
        })
        
    }

    _getInputValues() {
        this._values = {};
        this._inputs.forEach(input => {
            this._values[input.name] = input.value
        })
        return this._values
    }

    setInputValues(dataInfo) {
        this._inputs.forEach(input => {
            input.value = dataInfo[input.name]
        })

    }

    renderLoading() {
        this._sendButton.textContent = `${ this._sendButton.textContent}...`
    }

    returnButtonText() {
        this._sendButton.textContent = this._sendButtonText;
    }
}