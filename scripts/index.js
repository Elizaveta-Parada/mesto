// Выборка DOM элементов 
const popupProfile = document.querySelector('.popup_one');
const popupOpnProf = document.querySelector('.profile__edit-button');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const popupForm = document.querySelector('.popup__form');

const popupAdd = document.querySelector('.popup_two');
const imageInput = popupAdd.querySelector('.popup__input_type_image');
const titleInput = popupAdd.querySelector('.popup__input_type_title');
const popupOpnAdd = document.querySelector('.profile__add-button');
const popupFormAdd = document.getElementsByClassName('popup__form_type_add');

const popupClsBtnElm = document.querySelectorAll('.popup__close');

const popupElmThree = document.querySelector('.popup_three');
const popupFullImg = document.querySelector('#element__image');



const list = document.querySelector('.elements__lists');
const imageTemplate = document.querySelector('#image-template').content;





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

// Popup редактирование формы профиля
popupOpnProf.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
})

popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;  // Вставьте новые значения с помощью textContent
  closePopup(popupProfile);
}); 

// Popup добавления картинки
popupOpnAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

//popupFormAdd.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  // renderCard({
   // title:titleInput.value, 
   // image:imageInput.value
  // });
 // closePopup(popupAdd)
// });




  
  

  // popupElmThree.querySelector('.popup__title-image').textContent = cards.name;
  // popupElmThree.querySelector('.popup__image').src = cards.link;
  // popupElmThree.querySelector('.popup__image').alt = cards.name;



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

  const btnLike = imageElement.querySelector('.element__icon');
    btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('element__icon-active')
  });

  const btnDelete = imageElement.querySelector('.element__delete');
    btnDelete.addEventListener('click', (evt)=>{
    evt.target.closest('.element').remove()
  });

  image.addEventListener('click', () => {
    openPopup(popupElmThree);
    popupElmThree.querySelector('.popup__title-image').textContent = title.textContent;
    popupElmThree.querySelector('.popup__image').src = image.src;
    popupElmThree.querySelector('.popup__image').alt = title.textContent;
  });
  
  return imageElement;
};

function renderCard(cards, list) {
  const image = creatImage(cards);
  list.prepend(image);
}

cards.forEach((cards) => { // перебираем массив
  const image = document.querySelector('.elements__lists');
  renderCard(cards, image); // вызываем и передаем значения функции renderCard
});











