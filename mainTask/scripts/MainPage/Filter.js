class Filter {
  constructor(property, value) {
    this._property = property;
    this._value = value;
  }

  check(element) {
    return element[this._property] === this._value;
  }
}

class DefaultFilter {
  check() {
    return true;
  }
}
