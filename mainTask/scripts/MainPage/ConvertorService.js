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

  static timeToString(time) {
    if (time < 60) {
      return 'right now';
    }
    if (time < 3600) {
      return `${Math.floor(time / 60)} minutes ago`;
    }
    if (time < 86400) {
      return `${Math.floor(time / 3600)} hours ago`;
    }
    return `${Math.floor(time / 86400)} days ago`;
  }

  static _convertPhotoPost(photoPost) {
    const postTemplate = document.getElementById('postTemplate').content.querySelector('.post');
    postTemplate.id = photoPost.id;
    postTemplate.querySelector('.photo').setAttribute('src', photoPost.photoLink);
    postTemplate.querySelector('.userName').textContent = photoPost.author;
    postTemplate.querySelector('.notice').textContent = photoPost.description;
    postTemplate.querySelector('.like').setAttribute('data-id', photoPost.id);
    postTemplate.querySelector('.counter').textContent = photoPost.likes.length;
    postTemplate.querySelector('.timeOfPost').textContent = this.timeToString((Date.now() - photoPost.creationTime) / 1000);
    return postTemplate.cloneNode(true);
  }

  static _convertComment(comment) {
    const commentTemplate = document.getElementById('commentTemplate').content.querySelector('.comment');
    commentTemplate.querySelector('.userName').textContent = comment.user;
    commentTemplate.querySelector('.commentText').textContent = comment.text;
    return commentTemplate.cloneNode(true);
  }
}
