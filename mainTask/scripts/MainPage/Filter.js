class Filter {
  constructor(property, value) {
    this._property = property;
    this._value = value;
  }

  check(element) {
    if (element[this._property] === this._value) {
      return true;
    }
    return false;
  }
}

class DefaultFilter {
  check() {
    return true;
  }
}
