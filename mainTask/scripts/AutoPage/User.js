class User {
  constructor(email, name, username, password, ava) {
    this._email = email;
    this._name = name;
    this._username = username;
    this._password = password;
    this._ava = ava || '../images/defaultAva.svg';
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
    const user = new User(object._email,
      object._name,
      object._username,
      object._password,
      object._ava);
    return user;
  }
}
