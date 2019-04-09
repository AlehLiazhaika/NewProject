/* global ProfileModel, ProfileView */

class Profile {
  constructor() {
    this._model = new ProfileModel();
    this._view = new ProfileView(this._model.user,
      this.follow.bind(this),
      this.changeAva.bind(this),
      this.changeStatus.bind(this),
      this.changeAccess.bind(this));
  }

  follow() {
    this._model.follow();
    ProfileView.follow(this._model.getProfileFollowers());
  }

  changeAva(image) {
    this._model.changeAva(image);
    ProfileView.changeAva(image);
  }

  changeStatus(status) {
    this._model.changeStatus(status);
    ProfileView.changeStatus();
  }

  changeAccess() {
    this._model.changeAccess();
    ProfileView.changeAccess();
  }
}
