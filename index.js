import cards from "./scripts/utils/constants.js";
import Card from "./scripts/components/card.js";
import {FormValidator, enableValidationConfig} from "./scripts/components/validate.js";
import PopupWithImage from "./scripts/components/popupWithImage.js";
import Section from "./scripts/components/section.js";
import UserInfo from "./scripts/components/userInfo.js";



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

// const imagePopup = document.querySelector('.popup_full-image');
// const popupTitle = imagePopup.querySelector('.popup__title-image');
// const popupImage = imagePopup.querySelector('.popup__image');

const cardsContainer = document.querySelector('.elements__lists');


const imageTemplate = '#image-template';
const popupProfileSelector = '.popup_profile';
const imagePopupSelector = '.popup_full-image';
const cardsContainerSelector = '.elements__lists';

const profileNameSelector = '.profile__info-title';
const profileJobSelector = '.profile__info-subtitle'


const allPopups =document.querySelectorAll('.popup')


const imagePopup = new PopupWithImage(imagePopupSelector)
imagePopup.setEventListeners()

const userInfo = new UserInfo(profileNameSelector, profileJobSelector)



formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const imageNameLink = {name: titleInput.value, link: imageInput.value};
  const card = new Card(imageNameLink, imageTemplate, openPopupImage);
  renderCard(card.creatImage(), cardsContainer);
  closePopup(cardPopup);
  evt.target.reset();
});


// Popup редактирование формы профиля
popupOpnProf.addEventListener('click', () => {
  // openPopup(profilePopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  userInfo.openPopup()
  
})


formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;  // Вставьте новые значения с помощью textContent
  // closePopup(profilePopup);
}); 

// Popup добавления картинки
popupOpnAdd.addEventListener('click', () => {
  formValidatorImage.resetButton();
  // openPopup(cardPopup);
});

const section = new Section ({
  items: cards,
  renderer: (element) => {
    const card = new Card(element, imageTemplate, imagePopup.openPopup)
    return card.creatImage()
  }
}, cardsContainerSelector)
 
section.renderItems()


const formValidatorProfile = new FormValidator(enableValidationConfig, formProfile);
formValidatorProfile.enableValidation()

const formValidatorImage = new FormValidator(enableValidationConfig, formCard);
formValidatorImage.enableValidation();



