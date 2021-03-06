function addComments(post, comments) {
  const commentsPlace = post.querySelector('.comments');
  comments.forEach((element) => {
    commentsPlace.appendChild(ConvertorService.toHTML(element));
  });
}

class ConvertorService {
  static toHTML(object) {
    switch (object.constructor.name) {
      case 'PhotoPost':
        return this._convertPhotoPost(object);
      case 'Comment':
        return this._convertComment(object);
      case 'MiniPost':
        return this._convertMiniPost(object);
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
    const postTemplate = document.getElementById('postTemplate').content.querySelector('.post').cloneNode(true);
    postTemplate.id = photoPost.id;
    postTemplate.querySelector('.photo').setAttribute('src', photoPost.photoLink);
    postTemplate.querySelector('.ava').setAttribute('src', JSON.parse(localStorage.getItem(photoPost.author))._ava);
    postTemplate.querySelector('.ava').setAttribute('data-user', photoPost.author);
    postTemplate.querySelector('.userName').textContent = photoPost.author;
    postTemplate.querySelector('.userName').setAttribute('data-user', photoPost.author);
    postTemplate.querySelector('.notice').textContent = photoPost.description;
    postTemplate.querySelector('.like').setAttribute('data-id', photoPost.id);
    if (photoPost.isLiked(localStorage.getItem('me'))) {
      postTemplate.querySelector('.like').classList.add('liked');
    }
    postTemplate.querySelector('.share').setAttribute('data-id', photoPost.id);
    postTemplate.querySelector('.counter').textContent = photoPost.likes.length;
    postTemplate.querySelector('.timeOfPost').textContent = this.timeToString((Date.now() - photoPost.creationTime) / 1000);
    postTemplate.querySelector('.addComment').setAttribute('data-id', photoPost.id);
    addComments(postTemplate, photoPost.comments);
    return postTemplate;
  }

  static _convertComment(comment) {
    const commentTemplate = document.getElementById('commentTemplate').content.querySelector('.comment').cloneNode(true);
    commentTemplate.querySelector('.userName').textContent = comment.user;
    commentTemplate.querySelector('.userName').setAttribute('data-user', comment.user);
    commentTemplate.querySelector('.commentText').textContent = comment.text;
    return commentTemplate;
  }

  static _convertMiniPost(miniPost) {
    const miniPostTemplate = document.getElementById('miniPostTemplate').content.querySelector('.miniPost').cloneNode(true);
    miniPostTemplate.setAttribute('data-id', miniPost.id);
    miniPostTemplate.setAttribute('src', miniPost.image);
    return miniPostTemplate;
  }
}
