// Выборка DOM элементов 
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__editbutton");
const nameInput = popupElement.querySelector(".popup__subtitle-name");
const jobInput = popupElement.querySelector(".popup__subtitle-job");
const addButtonElement = popupElement.querySelector(".form__submit-btn_action_add");
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");
  

const openPopup = function() {
    popupElement.classList.add("popup_is-opened");
};

const closePopup = function() {
    popupElement.classList.remove("popup_is-opened");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup()
    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupElement.addEventListener('submit', handleFormSubmit); 
