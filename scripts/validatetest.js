const enableValidationConfig = {
    formList: document.forms,
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    activeButtonClass: 'popup__submit-btn_visable',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error_visable'
  }; 

const log = console.log

function enableValidation(rest) {
    const forms = Array.from(rest.formList)
    forms.forEach((form) => {
        const formInputs = Array.from(form.querySelectorAll(rest.inputSelector))
        const formButton = form.querySelector(rest.submitButtonSelector)
        setEventListener(formInputs, formButton, rest.inactiveButtonClass, rest.activeButtonClass, rest.inputErrorClass, rest.errorClass)
    
    })
}
const setEventListener = (formInputs, formButton, inactiveButtonClass, activeButtonClass, inputErrorClass, errorClass) => {
    formInputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, inputErrorClass, errorClass)
            toggleButtonState(formInputs, formButton, inactiveButtonClass, activeButtonClass)

        })
    })
}

const checkInputValidity = (input, inputErrorClass, errorClass) => {
    const errorElement = document.querySelector(`#${input.id}-error`)
    if (input.validity.valid) {
        hideInputError(input, errorElement, inputErrorClass, errorClass)
    } else {showInputError(input, errorElement, inputErrorClass, errorClass)}
  }

const  hideInputError = (input, errorElement, inputErrorClass, errorClass) => {
    input.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
}

const showInputError = (input, errorElement, inputErrorClass, errorClass) => {
    input.classList.add(inputErrorClass);
    errorElement.textContent = input.validetionMassege;
    errorElement.classList.add(errorClass);
}

const toggleButtonState = (formInputs, formButton, inactiveButtonClass, activeButtonClass) => {
    if (hasInvalidInput(formInputs)) {
        disableButton(formButton, inactiveButtonClass, activeButtonClass)
      } else {enableButton(formButton, inactiveButtonClass, activeButtonClass)}

}

const hasInvalidInput = (formInputs) => {
    return formInputs.some((input) => !input.validity.valid)
}

const disableButton = (formButton, inactiveButtonClass, activeButtonClass) => {
    formButton.classList.add(inactiveButtonClass)
    formButton.classList.remove(activeButtonClass)
    formButton.removeAttribute('disable')
}

const enableButton = (formButton, inactiveButtonClass, activeButtonClass) => {
    formButton.classList.remove(inactiveButtonClass)
    formButton.classList.add(activeButtonClass)
    formButton.setAttribute('disable', true)
}

enableValidation(enableValidationConfig)