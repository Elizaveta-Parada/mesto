// Выборка DOM элементов 
const popupForm = document.querySelector('.popup__form');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const popupController = ({popup, btnOpen, btnClose}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const popupElem = document.querySelector(popup);

  const closePopup = event => {
    const target = event.target;
    if (
      target === popupElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
      ) {
      popupElem.classList.remove('popup_opened')
      window.removeEventListener('keydown', closePopup);
    }
  }

  const openPopup = () => {
    popupElem.classList.add('popup_opened')
    window.addEventListener('keydown', closePopup)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openPopup);
  });

  popupElem.addEventListener('click', closePopup);
};

popupController({
  popup: '.popup__one',
  btnOpen: '.profile__edit-button',
  btnClose: '.popup__close', 
});

popupController({
  popup: '.popup__two',
  btnOpen: '.profile__add-button',
  btnClose: '.popup__close',
});

popupController({
  popup: '.popup__three',
  btnOpen: '.element__image',
  btnClose: '.popup__close',
});

// Обработчик «отправки» формы
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    // Выберите элементы, куда должны быть вставлены значения полей
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    
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

const imageTemplate = document.querySelector('#image-template').content;
const list = document.querySelector('.elements__lists');
const btnDelete = imageTemplate.querySelector('.element__delete');
// Функция добавления фото
function creatImage(initialCards) {
  const imageElement = imageTemplate.cloneNode(true);
  imageElement.querySelector('.element__title').textContent = initialCards.name;
  imageElement.querySelector('.element__image').src = initialCards.link;
  list.append(imageElement);
}

initialCards.forEach(creatImage);

// Функция добавления фото через popup

	
