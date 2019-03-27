class ConvertorService {
  static toHTML(object) {
    switch (object.constructor.name) {
      case 'PhotoPost':
        return this._convertPhotoPost(object);
      case 'Comment':
        return this._convertComment(object);
      default:
        return undefined;
    }
  }

  static _convertPhotoPost(photoPost) {
    const postTemplate = document.getElementById('postTemplate').content.querySelector('.post');
    postTemplate.id = photoPost.id;
    postTemplate.querySelector('.photo').setAttribute('src', photoPost.photoLink);
    postTemplate.querySelector('.userName').textContent = photoPost.author;
    postTemplate.querySelector('.notice').textContent = photoPost.description;
    postTemplate.querySelector('.like').setAttribute('data-id', photoPost.id);
    postTemplate.querySelector('.counter').textContent = '0';
    postTemplate.querySelector('.counter').setAttribute('data-id', photoPost.id);
    postTemplate.querySelector('.timeOfPost').textContent = `${Date.now() - photoPost.creationTime} seconds ago`;
    return postTemplate.cloneNode(true);
  }

  static _convertComment(comment) {
    const commentTemplate = document.getElementById('commentTemplate').content.querySelector('.comment');
    commentTemplate.querySelector('.userName').textContent = comment.user;
    commentTemplate.querySelector('.commentText').textContent = comment.text;
    return commentTemplate.cloneNode(true);
  }
}
