import cards from "./scripts/utils/constants.js";
import Card from "./scripts/components/card.js";
import {FormValidator, enableValidationConfig} from "./scripts/components/validate.js";
import PopupWithImage from "./scripts/components/popupWithImage.js";
import Section from "./scripts/components/section.js";
import UserInfo from "./scripts/components/userInfo.js";
import PopupWithForm from "./scripts/components/popupWithForm.js";


// Выборка DOM элементов 
const profilePopup = document.querySelector('.popup_profile');
const popupOpnProf = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_type_edit');

const popupOpnAdd = document.querySelector('.profile__add-button');
const formCard = document.querySelector('.popup__form_type_add');

const imageTemplate = '#image-template';
const popupProfileSelector = '.popup_profile';
const popupAddImageSelector = '.popup_card';
const imagePopupSelector = '.popup_full-image';
const cardsContainerSelector = '.elements__lists';

const configInfo = {
  profileNameSelector: '.profile__info-title',
  profileJobSelector: '.profile__info-subtitle'
}


const imagePopup = new PopupWithImage(imagePopupSelector)
imagePopup.setEventListeners()

const userInfo = new UserInfo(configInfo)


// Popup редактирование формы профиля
popupOpnProf.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.openPopup()
 
})


// Popup добавления картинки
popupOpnAdd.addEventListener('click', () => {
  formValidatorImage.resetButton();
  popupAddImage.openPopup()
});

const section = new Section ({
  items: cards,
  renderer: (element) => {
    const card = new Card(element, imageTemplate, imagePopup.openPopup)
    return card.creatImage()
  }
}, cardsContainerSelector)
 
section.renderItems()


const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.closePopup()

})
popupProfile.setEventListeners()

const popupAddImage = new PopupWithForm(popupAddImageSelector, (evt) => {
  evt.preventDefault();
  section.addItem(popupAddImage.getInputValues())
  popupAddImage.closePopup()
})
popupAddImage.setEventListeners()

const formValidatorProfile = new FormValidator(enableValidationConfig, formProfile);
formValidatorProfile.enableValidation()

const formValidatorImage = new FormValidator(enableValidationConfig, formCard);
formValidatorImage.enableValidation();



