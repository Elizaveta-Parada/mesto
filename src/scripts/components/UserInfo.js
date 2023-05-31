export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileJob = document.querySelector(configInfo.profileJobSelector);
        this._profileAvatar = document.querySelector(configInfo.profileAvatarSelector);
    }

    getUserInfo() {
        return {profileName: this._profileName.textContent, profileJob: this._profileJob.textContent}
    }

    setUserInfo({ profileName, profileJob, profileAvatar }) {
        this._profileName.textContent = profileName;
        this._profileJob.textContent = profileJob;
        this._profileAvatar.src = profileAvatar;
    }
}