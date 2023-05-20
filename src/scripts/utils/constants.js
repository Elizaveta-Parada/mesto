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

// Выборка DOM элементов 
const popupOpnProf = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_type_edit');

const popupOpnAdd = document.querySelector('.profile__add-button');
const formCard = document.querySelector('.popup__form_type_add');

const imageTemplate = '#image-template';
const popupProfileSelector = '.popup_profile';
const popupAddImageSelector = '.popup_card';
const imagePopupSelector = '.popup_full-image';
const itemsContainerSelector = '.elements__lists';

const configInfo = {
  profileNameSelector: '.profile__info-title',
  profileJobSelector: '.profile__info-subtitle'
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
  configInfo
}