import cards from "./constants.js";
import Card from "./card.js";
import {FormValidator, enableValidationConfig} from "./validate.js";


// Выборка DOM элементов 
const profilePopup = document.querySelector('.popup_profile');
const popupOpnProf = document.querySelector('.profile__edit-button');
const nameInput = profilePopup.querySelector('.popup__input_type_name');
const jobInput = profilePopup.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const formProfile = document.querySelector('.popup__form_type_edit');

const cardPopup = document.querySelector('.popup_card');
const imageInput = cardPopup.querySelector('.popup__input_type_image');
const titleInput = cardPopup.querySelector('.popup__input_type_title');
const popupOpnAdd = document.querySelector('.profile__add-button');
const formCard = document.querySelector('.popup__form_type_add');
const popupClsList = document.querySelectorAll('.popup__close');

const imagePopup = document.querySelector('.popup_full-image');
const popupTitle = imagePopup.querySelector('.popup__title-image');
const popupImage = imagePopup.querySelector('.popup__image');

const cardsContainer = document.querySelector('.elements__lists');
const imageTemplate = '#image-template';

const allPopups =document.querySelectorAll('.popup')




// функция открытия  и закрытия popup 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose)
}

function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen)
  }
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget)
  }
}

function renderCard(card, cardsContainer,) {
  cardsContainer.prepend(card);
}

cards.forEach((element) => { 
  const card = new Card(element, imageTemplate, openPopupImage)
  renderCard(card.creatImage(), cardsContainer); // вызываем и передаем значения функции renderCard
});

formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const imageNameLink = {name: titleInput.value, link: imageInput.value};
  const card = new Card(imageNameLink, imageTemplate, openPopupImage);
  renderCard(card.creatImage(), cardsContainer);
  closePopup(cardPopup);
  evt.target.reset();
});

// Popup открытие картинки
function openPopupImage(cardDate) {
  openPopup(imagePopup);
  popupTitle.textContent = cardDate.name;
  popupImage.src = cardDate.link;
  popupImage.alt = cardDate.name;
};

// Popup редактирование формы профиля
popupOpnProf.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
})

formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;  // Вставьте новые значения с помощью textContent
  closePopup(profilePopup);
}); 

// Popup добавления картинки
popupOpnAdd.addEventListener('click', () => {
  openPopup(cardPopup);
});

popupClsList.forEach( (e) => {
  const popup = e.closest('.popup')
  e.addEventListener('click', () => closePopup(popup));
})

allPopups.forEach(element => element.addEventListener('click', closePopupOverlay))


const formValidatorProfile = new FormValidator(enableValidationConfig, formProfile);
formValidatorProfile.enableValidation()

const formValidatorImage = new FormValidator(enableValidationConfig, formCard);
formValidatorImage.enableValidation();

