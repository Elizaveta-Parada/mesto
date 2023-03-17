// Выборка DOM элементов 
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__editbutton");

const openPopup = function() {
    popupElement.classList.add("popup_is-opened");
};

const closePopup = function() {
    popupElement.classList.remove("popup_is-opened");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

// Находим форму в DOM
// const formElement = document.querySelector(".popup");
// Находим поля формы в DOM
// const nameInput = formElement.querySelector(".popup__subtitle-name");
// const jobInput = formElement.querySelector(".popup__subtitle-job");
// const addButtonElement = formElement.querySelector(".form__submit-btn_action_add");


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// function handleFormSubmit (evt) {
    // evt.preventDefault(); 
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
// }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit); 
