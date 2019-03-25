class CommentView {
  static getView(comment) {
    const commentTemplate = document.getElementById('commentTemplate').content.querySelector('.comment');
    commentTemplate.querySelector('.userName').textContent = comment.user;
    commentTemplate.querySelector('.commentText').textContent = comment.text;
    return commentTemplate.cloneNode(true);
  }
}
