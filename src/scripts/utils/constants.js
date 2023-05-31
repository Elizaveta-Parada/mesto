// Массив фото 
 const cards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validatorConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  activeButtonClass: 'popup__submit-btn_visable',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error_visable'
}; 


// Выборка DOM элементов 
const popupOpnProf = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_type_edit');

const popupOpnAdd = document.querySelector('.profile__add-button');
const formCard = document.querySelector('.popup__form_type_add');
const formAvatar = document.querySelector('.popup__form_type_avatar');
const buttonAvatarEdit = document.querySelector('.profile__avatar-edit');

const imageTemplate = '#image-template';
const popupProfileSelector = '.popup_profile';
const popupAddImageSelector = '.popup_card';
const imagePopupSelector = '.popup_full-image';
const itemsContainerSelector = '.elements__lists';
const popupAvatarSelector = '.popup_avatar';
const popupDeleteSelector = '.popup_delete';

const configInfo = {
  profileNameSelector: '.profile__info-title',
  profileJobSelector: '.profile__info-subtitle',
  profileAvatarSelector: '.profile__avatar',
}

export {
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
}