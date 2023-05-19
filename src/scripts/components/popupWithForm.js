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
}