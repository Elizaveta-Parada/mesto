
class Card {
    constructor(cardData, imageTemplate, openPopupImage, handleImageDelete) {
        this._cardData = cardData;
        this._userId = cardData.userId;
        this._authorId = cardData.owner._id;
        this._name = cardData.name;
        this._link = cardData.link;
        this._imageTemplate = imageTemplate;
        this._handleImageClick = openPopupImage;
        this._handleImageDelete = handleImageDelete;
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
        this._cloneImage = this._getTemplate();
        this._title = this._cloneImage.querySelector('.element__title');
        this._image = this._cloneImage.querySelector('.element__image');
        this._btnLike = this._cloneImage.querySelector('.element__icon');
        this._btnDelete = this._cloneImage.querySelector('.element__delete');
        this._title.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._setEventListeners();
        this._deleteTrashButton();
        return this._cloneImage
    }

    _setEventListeners() {
        this._btnLike.addEventListener('click', this._handleLike);
        this._btnDelete.addEventListener('click',  this._handleDelete);
        this._image.addEventListener('click', this._handleImageOpen);
    }

    _handleLike = () => {
        this._btnLike.classList.toggle('element__icon-active');
    }

    _handleDelete = () => {
       this._handleImageDelete(this); 
    }

    _handleImageOpen = () => {
        this._handleImageClick(this._cardData);
    }

    _deleteTrashButton() {
        if (this._userId === this._authorId) {
            this._btnDelete.style.display = 'block' 
        } else {
            this._btnDelete.style.display = 'none'
        }
    }

    removeImage() {
        this._cloneImage.remove();
        this._cloneImage = null;
    }


}

export default Card