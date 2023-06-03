
class Card {
    constructor(cardData, imageTemplate, openPopupImage, handleImageDelete, interactivLike) {
        this._cardData = cardData;
        console.log(this._cardData)
        this._userId = cardData.userId;
        this._ownerId = cardData.owner._id;
        this._name = cardData.name;
        this._link = cardData.link;
        this._imageTemplate = imageTemplate;
        this._handleImageClick = openPopupImage;
        this._handleImageDelete = handleImageDelete;
        this._likes = cardData.likes;
        this._likesLength = cardData.likes.length;
        this._cardId = cardData._id;
        this._interactivLike = interactivLike;
        this._cloneImage = this._getTemplate();
        this._likesCounter = this._cloneImage.querySelector('.element__like-counter');
        this._btnLike = this._cloneImage.querySelector('.element__icon');
        this._btnDelete = this._cloneImage.querySelector('.element__delete');
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._imageTemplate)
        .content
        .querySelector('.element')
        .cloneNode(true);
      // вернём DOM-элемент карточки
        return cardElement;
    }

    createImage() {
        this._title = this._cloneImage.querySelector('.element__title');
        this._image = this._cloneImage.querySelector('.element__image');
        this._btnDelete = this._cloneImage.querySelector('.element__delete');
        this._title.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._setEventListeners();
        this._deleteTrashButton();
        this._checkLikes();
        return this._cloneImage
    }

    _setEventListeners() {
        this._btnLike.addEventListener('click', this._handleLike);
        this._btnDelete.addEventListener('click',  this._handleDelete);
        this._image.addEventListener('click', this._handleImageOpen);
    }

    _handleLike = () => {
        this._interactivLike(this._btnLike, this._cardId)
    }

    _handleDelete = () => {
       this._handleImageDelete({imageObject: this, cardId: this._cardId}); 
    }

    _handleImageOpen = () => {
        this._handleImageClick(this._cardData);
    }

    _deleteTrashButton() {
        if (this._ownerId === this._userId) {
            this._btnDelete.style.display = 'block' 
        } else {
            this._btnDelete.style.display = 'none'
        }
    }

    removeImage() {
        this._cloneImage.remove();
        this._cloneImage = null;
    }

    // Метод проверки наличий лайков
    _checkLikes() {
        this._likes.forEach(element => {
            if (element._id === this._userId) {
                this._btnLike.classList.add('element__icon-active')
                return
            }
        });
        this._likesCounter.textContent = this._likesLength
    }

    toggleLike(likes) {
        this._btnLike.classList.toggle('element__icon-active');
        this._likesCounter.textContent = likes.length;
    }

}
export default Card