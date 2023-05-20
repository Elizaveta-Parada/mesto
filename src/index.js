import  {
  cards,
  popupOpnProf,
  formProfile,
  popupOpnAdd,
  formCard,
  imageTemplate,
  popupProfileSelector,
  popupAddImageSelector,
  imagePopupSelector,
  itemsContainerSelector,
  configInfo
} from "./scripts/utils/constants.js";
import Card from "./scripts/components/Card.js";
import {FormValidator, validatorConfig} from "./scripts/components/Validate.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import './pages/index.css'; // добавьте импорт главного файла стилей 

const imagePopup = new PopupWithImage(imagePopupSelector)
const userInfo = new UserInfo(configInfo)
const formValidatorProfile = new FormValidator(validatorConfig, formProfile);
const formValidatorImage = new FormValidator(validatorConfig, formCard);

function createItem(element) { 
const card = new Card(element, imageTemplate, imagePopup.openPopup)
    return card.createImage()
  }

const section = new Section ({
  items: cards,
  renderer: (element) => {
    section.addItem(createItem(element))
  }
}, itemsContainerSelector)

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
  popupProfile.closePopup()
})

const popupAddImage = new PopupWithForm(popupAddImageSelector, (element) => {
  section.addItem(createItem(element))
  popupAddImage.closePopup()
})

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


imagePopup.setEventListeners()
section.renderItems()
popupProfile.setEventListeners()
popupAddImage.setEventListeners()
formValidatorProfile.enableValidation()
formValidatorImage.enableValidation();



