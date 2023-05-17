export default class UserInfo {
    constructor(profileNameSelector, profileJobSelector) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);

    }

    getUserInfo() {
        return {profileName: this._profileName.textContent, profileJob: this._profileJob.textContent}
    }

    setUserInfo(dataInfo) {
        this._profileName = dataInfo.profileName;
        this._profileJob = dataInfo.profileJob;
    }
}