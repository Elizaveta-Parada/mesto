// Выборка DOM элементов 
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const nameInput = popupElement.querySelector(".popup__input_type_name");
const jobInput = popupElement.querySelector(".popup__input_type_job");
const addButtonElement = popupElement.querySelector(".form__submit-btn_action_add");
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");
const popupForm = popupElement.querySelector(".popup__form")
const popupOpenAddButton = document.querySelector(".profile__add-button")
  

const openPopup = function() {
    popupElement.classList.add("popup_opened");
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
};

const closePopup = function() {
    popupElement.classList.remove("popup_opened");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupOpenAddButton.addEventListener("click", openPopup)
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
popupForm.addEventListener('submit', handleFormSubmit); 

// Массив фото 
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const imageTemplate = document.querySelector("#image-template").content;
  const list = document.querySelector(".elements__lists");

  initialCards.forEach(renderItem)

function renderItem (initialCards) {
	const imageElement = imageTemplate.cloneNode(true);
	imageElement.querySelector('.element__title').textContent = initialCards.name;
    imageElement.querySelector('.element__image').src = initialCards.link;
	list.append(imageElement);
};