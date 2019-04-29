/* global ProfileModel, ProfileView */

class Profile {
  constructor() {
    this._model = new ProfileModel();
    this._view = new ProfileView(this._model.user,
      this.follow.bind(this),
      this.changeAva.bind(this),
      this.changeStatus.bind(this),
      this.changeAccess.bind(this),
      this.like.bind(this),
      this.share.bind(this),
      this.addComment.bind(this));
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

  like(postID) {
    this._model.like(postID);
    ProfileView.like(postID);
  }

  share(postID) {
    this._model.share(postID);
    ProfileView.share(postID);
  }

  addComment(postID, text) {
    this._model.addComment(postID, text);
    ProfileView.addComment(postID);
  }
}
