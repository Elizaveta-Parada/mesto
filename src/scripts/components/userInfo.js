export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileJob = document.querySelector(configInfo.profileJobSelector);

    }

    getUserInfo() {
        return {profileName: this._profileName.textContent, profileJob: this._profileJob.textContent}
    }

    setUserInfo(dataInfo) {
        this._profileName.textContent = dataInfo.profileName;
        this._profileJob.textContent = dataInfo.profileJob;
    }
}