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
  configInfo,
  validatorConfig,
  popupAvatarSelector,
  buttonAvatarEdit,
  formAvatar,
  popupDeleteSelector,
} from "./scripts/utils/constants.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupDeleteImage from "./scripts/components/PopupDeleteImage.js";
import Api from "./scripts/components/Api.js";
import './pages/index.css'; // добавьте импорт главного файла стилей 


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '6e677985-1c05-4284-9161-72fb9652f137',
    'Content-Type': 'application/json'
  }
})


const imagePopup = new PopupWithImage(imagePopupSelector)
const userInfo = new UserInfo(configInfo)
const formValidatorProfile = new FormValidator(validatorConfig, formProfile);
const formValidatorImage = new FormValidator(validatorConfig, formCard);
const formValidatorAvatar = new FormValidator(validatorConfig, formAvatar)

const popupDeleteImage = new PopupDeleteImage(popupDeleteSelector, (element) => {
  element.removeImage();
  popupDeleteImage.closePopup();

})

function createCard(element) { 
  const card = new Card(element, imageTemplate, imagePopup.openPopup, popupDeleteImage.openPopup)
    return card.createImage()
}

const section = new Section ({
  items: cards,
  renderer: (element) => {
    section.addItem(createCard(element))
  }
}, itemsContainerSelector)

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res => console.log(res))
  // userInfo.setUserInfo(data);
  popupProfile.closePopup()
})

const popupAddImage = new PopupWithForm(popupAddImageSelector, (element) => {
  section.addItem(createCard(element))
  popupAddImage.closePopup()
})

const popupAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  document.querySelector('.profile__avatar').src = data.link;
  popupAvatar.closePopup();
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

buttonAvatarEdit.addEventListener('click', () => {
  popupAvatar.openPopup();
  formValidatorAvatar.resetButton();
})


imagePopup.setEventListeners();
// section.renderItems();
popupProfile.setEventListeners();
popupAddImage.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteImage.setEventListeners();
formValidatorProfile.enableValidation();
formValidatorImage.enableValidation();
formValidatorAvatar.enableValidation();


Promise.all([api.getUserInfo(), api.getCards()])
  .then(([dataUserInfo, dataCard]) => {
    dataCard.forEach(element => element.userId = dataUserInfo._id)
    userInfo.setUserInfo({ profileName: dataUserInfo.name, profileJob: dataUserInfo.about, profileAvatar: dataUserInfo.avatar })
    section.renderItems(dataCard)

  })

