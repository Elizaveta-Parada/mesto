
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  activeButtonClass: 'popup__submit-btn_visable',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error_visable'
}; 

const showInputError = (input, inputErrorClass) => {
  const errorElement = documentinput.querySelector(`#${input.id}-error`)
  console.log(errorElement)
  input.classList.add(inputErrorClass);
  errorElement.textContent = input.validetionMassege
};

const hideInputError = (input, inputErrorClass) => {
  const errorElement = document.querySelector(`#${input.id}-error`)
  input.classList.remove(inputErrorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (input) => {
  if (input.checkValidity()) {
    hideInputError(input)
  } else {
    showInputError(input)
  }
}

const enableValidation = ({ formSelector, ...rest }) => {
    const forms = Array.from(document.querySelectorAll(formSelector))
    forms.forEach(form => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault()
      })
      setEventListener(form, rest)
    })
}

const setEventListener = (form, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(form.querySelectorAll(inputSelector))
  const formButton = form.querySelector(submitButtonSelector)
  disableButton(formButton, rest)
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest)
      } else {
        enableButton(formButton, rest)
      }
    })
  })
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

const enableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
    button.classList.remove(inactiveButtonClass)
    button.classList.add(activeButtonClass)
    button.setAttribute('disable', true)

}

const disableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
    button.classList.add(inactiveButtonClass)
    button.classList.remove(activeButtonClass)
    button.removeAttribute('disable')

}



enableValidation(enableValidationConfig)