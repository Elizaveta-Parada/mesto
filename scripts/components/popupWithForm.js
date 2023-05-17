import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFuncion) {
        super(popupSelector);
        this._submitFuncion = submitFuncion;
        this._form = this._popup.querySelector('.popup__form')
        this._inputs = this._form.querySelectorAll('.popup__input')
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFuncion)
    }

    getInputValues() {
        this._velues = {};
        this._inputs.forEach(input => {
            this._velues[input.name] = input.velue
        })
        return this._velues
    }

    setInputValues(dataInfo) {
        this._inputs.forEach(input => {
            input.velue = dataInfo[input.name]
        })

    }
}