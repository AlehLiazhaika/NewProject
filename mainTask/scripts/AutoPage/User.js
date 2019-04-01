class User {
  constructor(email, name, username, password) {
    this._email = email;
    this._name = name;
    this._username = username;
    this._password = password;
    this._ava = '../images/defaultAva.svg';
  }

  get email() {
    return this._email;
  }

  get name() {
    return this._name;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get ava() {
    return this._ava;
  }

  set ava(ava) {
    this._ava = ava;
  }

  static parse(object) {
    const user = new User(object._email, object._name, object._username, object._password); // eslint-disable-line no-underscore-dangle
    user.ava = object._ava; // eslint-disable-line no-underscore-dangle
    return user;
  }
}
