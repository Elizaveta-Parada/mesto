
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
const popupFullImg = document.querySelector('#element__image');
const popupTitle = imagePopup.querySelector('.popup__title-image');
const popupImage = imagePopup.querySelector('.popup__image');

const cardsContainer = document.querySelector('.elements__lists');
const imageTemplate = document.querySelector('#image-template').content;

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

function creatImage(cards) {
  const imageElement = imageTemplate.cloneNode(true);
  const title = imageElement.querySelector('.element__title');
  const image = imageElement.querySelector('.element__image');
  title.textContent = cards.name;
  image.src = cards.link;
  image.alt = cards.name;

  const btnLike = imageElement.querySelector('.element__icon');
    btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('element__icon-active');
  });

  const btnDelete = imageElement.querySelector('.element__delete');
    btnDelete.addEventListener('click', (evt)=>{
    evt.target.closest('.element').remove();
  });

  image.addEventListener('click', () => {
    openPopup(imagePopup);
    popupTitle.textContent = title.textContent;
    popupImage.src = image.src;
    popupImage.alt = title.textContent;
  });
  
  return imageElement;
};

function renderCard(cards, cardsContainer) {
  const image = creatImage(cards);
  cardsContainer.prepend(image);
}

cards.forEach((cards) => { // перебираем массив
  renderCard(cards, cardsContainer); // вызываем и передаем значения функции renderCard
});

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
  const formButton = cardPopup.querySelector(enableValidationConfig.submitButtonSelector)
  disableButton(formButton, enableValidationConfig.inactiveButtonClass, enableValidationConfig.activeButtonClass);
  openPopup(cardPopup);
});

formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderCard({name:titleInput.value, link: imageInput.value}, cardsContainer);
  closePopup(cardPopup);
  evt.target.reset();
});

popupClsList.forEach( (e) => {
  const popup = e.closest('.popup')
  e.addEventListener('click', () => closePopup(popup));
})

allPopups.forEach(element => element.addEventListener('click', closePopupOverlay))






