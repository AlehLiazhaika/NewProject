function loadPhoto() {
  const image = `./resources/images/usersPhotos/${document.getElementById('loadPhoto').files[0].name}`;
  document.getElementById('uploadImg').style.display = 'none';
  document.getElementById('loadedPhoto').setAttribute('src', image);
  document.getElementById('loadedPhoto').style.display = 'block';
}


class PostEditorView {
  constructor(publish) {
    this._publishWrapper = {
      handleEvent(event) {
        const image = `./resources/images/usersPhotos/${document.getElementById('loadPhoto').files[0].name}`;
        const discription = document.getElementById('discribtion').value;
        XMLHttpRequest
        publish(image, discription);
      },
    };
    this.addEvents();
  }

  addEvents() {
    document.getElementById('loadPhoto').addEventListener('change', loadPhoto);
    document.getElementById('publishPostBttn').addEventListener('click', this._publishWrapper);
  }

  static publish() {
    document.location.href = './main.html';
  }
}
