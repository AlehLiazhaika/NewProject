/* global PostEditorModel, PostEditorView */

class PostEditor {
  constructor() {
    this._model = new PostEditorModel();
    this._view = new PostEditorView(this.publish.bind(this));
  }

  publish(image, discription) {
    this._model.publish(image, discription);
    PostEditorView.publish();
  }
}
