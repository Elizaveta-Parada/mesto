
class Card {
    constructor(cardDate, imageTemplate, openPopupImage) {
        this._cardDate = cardDate;
        this._name = cardDate.name;
        this._link = cardDate.link;
        this._imageTemplate = imageTemplate;
        this._openPopupImage = openPopupImage;
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

    creatImage() {
        this._cloneImage = this._getTemplate();
        this._title = this._cloneImage.querySelector('.element__title');
        this._image = this._cloneImage.querySelector('.element__image');
        this._btnLike = this._cloneImage.querySelector('.element__icon');
        this._btnDelete = this._cloneImage.querySelector('.element__delete');
        this._title.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._setEventListeners();
        return this._cloneImage
    }

    _setEventListeners() {
        this._btnLike.addEventListener('click', this._handleLike);
        this._btnDelete.addEventListener('click',  this._handleDelete);
        this._image.addEventListener('click', this._handleOpenPopupImage);
    }

    _handleLike = () => {
        this._btnLike.classList.toggle('element__icon-active');
    }

    _handleDelete = () => {
        this._cloneImage.remove();
    }

    _handleOpenPopupImage = () => {
        this._openPopupImage(this._cardDate)
    }

}

export default Card