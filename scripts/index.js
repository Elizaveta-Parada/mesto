// Выборка DOM элементов 
const popupElmOne = document.querySelector('.popup_one');
const popupElmTwo = document.querySelector('.popup_two');
const popupElmThree = document.querySelector('.popup_three');
const popupClsBtnElm = document.querySelectorAll('.popup__close');
const popupOpnBtnElmOne = document.querySelector('.profile__edit-button');
const popupOpnBtnELmTwo = document.querySelector('.profile__add-button');
const nameInput = popupElmOne.querySelector('.popup__input_type_name');
const jobInput = popupElmOne.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const popupForm = document.querySelector('.popup__form');
const imageInput = popupElmTwo.querySelector('.popup__input_type_image');
const titleInput = popupElmTwo.querySelector('.popup__input_type_title');
const list = document.querySelector('.elements__lists');
const imageTemplate = document.querySelector('#image-template').content;
const popupOpnBtnELmThree = imageTemplate.querySelector('.element__image');
const btnDelete = imageTemplate.querySelector('.element__delete');
const btnLike = imageTemplate.querySelector('.element__icon');


// функция открытия  и закрытия popup 
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupClsBtnElm.forEach( (e) => {
  const popup = e.closest('.popup')
  e.addEventListener('click', () => closePopup(popup));
})

// Редактирование формы профиля
popupOpnBtnElmOne.addEventListener('click', () => {
  openPopup(popupElmOne);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
})

popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;  // Вставьте новые значения с помощью textContent
  closePopup(popupElmOne);
}); 

// Массив фото 
const cards = [
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

function creatImage(cards) {
  const imageElement = imageTemplate.cloneNode(true);
  const title = imageElement.querySelector('.element__title');
  const image = imageElement.querySelector('.element__image');
  title.textContent = cards.name;
  image.src = cards.link;
  return imageElement;
};

function addCard(cards, list) {
  const image = creatImage(cards);
  list.append(image);
}

cards.forEach((cards) => { // перебираем массив
  const image = document.querySelector('.elements__lists');
  addCard(cards, image); // вызываем и передаем значения функции addCard
});


// Функция добавления картинки
const addImage = document.querySelector('.popup__submit-btn_add'); 

addImage.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const imageElement = imageTemplate.cloneNode(true);
  const cardImage = imageTemplate.querySelector('.element__image');
  imageElement.querySelector('.element__title').textContent = titleInput.value;
  cardImage.src = imageInput.link;
  creatImage();
  closePopup(popupElmTwo)
  list.preppend(imageElement);
})

function iconLike () {btnLike.classList.toggle('.element__icon-active');}

function deleteImage() {
  image.remove()
}

const cardImage = imageTemplate.querySelector('.element__image');


btnLike.addEventListener('click', iconLike);
btnDelete.addEventListener('click', deleteImage)
cardImage.addEventListener('click', () => {
    openPopup(popupElmThree);
    popupElmThree.querySelector('.popup__title-image').textContent = initialCards.name;
    popupElmThree.querySelector('.popup__image').src = initialCards.link;
    popupElmThree.querySelector('.popup__image').alt = initialCards.name;
});

// Добавление карточек
popupOpnBtnELmTwo.addEventListener('click', () => {
  openPopup(popupElmTwo);
});
