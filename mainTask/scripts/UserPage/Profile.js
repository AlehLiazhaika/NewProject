/* global ProfileModel, ProfileView */

class Profile {
  constructor() {
    this._model = new ProfileModel();
    this._view = new ProfileView(this._model.user,
      this.follow.bind(this),
      this.changeAva.bind(this));
  }

  follow() {
    this._model.follow();
    this._view.follow(this._model.getProfileFollowers());
  }

  changeAva(image) {
    this._model.changeAva(image);
    this._view.changeAva(image);
  }
}
