class PhotoPostView {
  static getView(photoPost) {
    const postTemplate = document.getElementById('postTemplate').content.querySelector('.post');
    postTemplate.id = photoPost.id;
    postTemplate.querySelector('.photo').setAttribute('src', photoPost.photoLink);
    postTemplate.querySelector('.userName').textContent = photoPost.author;
    postTemplate.querySelector('.notice').textContent = photoPost.description;
    postTemplate.querySelector('.like').setAttribute('data-id', photoPost.id);
    postTemplate.querySelector('.counter').textContent = '0';
    postTemplate.querySelector('.counter').setAttribute('data-id', photoPost.id);
    postTemplate.querySelector('.timeOfPost').textContent = `${Date.now() - photoPost.creationTime} seconds ago`;
    postTemplate.querySelector('.addComment').setAttribute('onkeydown', 'commentFunc(this, event.keyCode)');
    return postTemplate.cloneNode(true);
  }
}

// addEventListener('click', likeFunc)
