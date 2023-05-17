
const enableValidationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    activeButtonClass: 'popup__submit-btn_visable',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error_visable'
}; 
  

class FormValidator {
    constructor(rest, form) {
    this._inputSelector = rest.inputSelector;
    this._submitButtonSelector = rest.submitButtonSelector;
    this._inactiveButtonClass = rest.inactiveButtonClass;
    this._activeButtonClass = rest.activeButtonClass;
    this._inputErrorClass = rest.inputErrorClass;
    this._errorClass = rest.errorClass;
    this._form = form;
    }
     
    _setEventListener() {
        this._formInputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input)
                this._toggleButtonState()
            })
        })
    }

    _checkInputValidity(input) {
        const errorElement = document.querySelector(`#${input.id}-error`)
        if (input.validity.valid) {
            this._hideInputError(errorElement, input)
        } else {this._showInputError(errorElement, input)}
    }


    _hideInputError(errorElement, input) {
        input.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }
    
    _showInputError(errorElement, input) {
        input.classList.add(this._inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton()
          } else {this._enableButton()}
    
    }

    _disableButton() {
        this._formButton.classList.add(this._inactiveButtonClass)
        this._formButton.classList.remove(this._activeButtonClass)
        this._formButton.setAttribute('disabled', true) 
    }
    
    _enableButton() {
        this._formButton.classList.remove(this._inactiveButtonClass)
        this._formButton.classList.add(this._activeButtonClass)
        this._formButton.removeAttribute('disabled') 
    }


    _hasInvalidInput() {
        return Array.from(this._formInputs).some((input) => !input.validity.valid)
    }


    enableValidation() {    
        this._formInputs = this._form.querySelectorAll(this._inputSelector)
        this._formButton = this._form.querySelector(this._submitButtonSelector)
        this._setEventListener()
    }

    resetButton() {
        this._formButton = this._form.querySelector(this._submitButtonSelector);
        this._disableButton();
    }

}


export {FormValidator, enableValidationConfig}
  