export default class Api {
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    // Метод обработки ответа с сервера
    _processingResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`код ошибки: ${res.status}`);
        }
    }

    // Метод получения данных пользователя с сервера 
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => { return this._processingResponse(res) })
    }

    // Метод отправки данных пользователя на сервер
    setUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name: data.profileName, about: data.profileJob })
        })
        .then(res => { return this._processingResponse(res) })
    }

    // Метод загрузки карточек с сервера
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => { return this._processingResponse(res) })
    }



}