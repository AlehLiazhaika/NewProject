/* global ConvertorService */


function recolorLike(likeBttn) {
  likeBttn.classList.toggle('liked');
}

function changeLikeCounter(counter, changeValue) {
  const numOfLikes = parseInt(counter.innerText, 10) + changeValue;
  counter.innerText = numOfLikes; // eslint-disable-line no-param-reassign
}

function toggleSharePanel(shareBttn) {
  shareBttn.classList.toggle('shared');
  shareBttn.parentNode.parentNode.lastElementChild.classList.toggle('sharePanelOn');
}

function showComment(input) {
  if (input.value !== '') {
    const comment = new Comment(localStorage.getItem('me'), input.value);
    input.parentNode.parentNode.querySelector('.comments').appendChild(ConvertorService.toHTML(comment));
    input.value = ''; // eslint-disable-line no-param-reassign
  }
}

function like(postID) {
  const post = document.getElementById(`${postID}`);
  const likeImg = post.querySelector('.like');
  const likeCounter = post.querySelector('.counter');
  recolorLike(likeImg);
  if (likeImg.classList.length === 2) {
    changeLikeCounter(likeCounter, 1);
  } else {
    changeLikeCounter(likeCounter, -1);
  }
}

function share(postID) {
  const shareBttn = document.getElementById(`${postID}`).querySelector('.share');
  toggleSharePanel(shareBttn);
}

function addComment(postID) {
  const input = document.getElementById(`${postID}`).querySelector('.addComment');
  showComment(input);
}

function goToProfile(username) {
  localStorage.setItem('targetUser', username);
  document.location.href = './profile.html';
}

function remove(postID) {
  const element = document.getElementById(`${postID}`);
  element.parentNode.removeChild(element);
}

function clear() {
  document.getElementById('feed').innerHTML = '';
}


class FeedView {
  constructor(likeFunc, shareFunc, addCommentFunc) {
    this._toProfileWrapper = {
      handleEvent(event) {
        goToProfile(event.target.innerText);
      },
    };
    this._likeWrapper = {
      handleEvent(event) {
        const postID = parseInt(event.target.getAttribute('data-id'), 10);
        likeFunc(postID);
      },
    };
    this._shareWrapper = {
      handleEvent(event) {
        const postID = parseInt(event.target.getAttribute('data-id'), 10);
        shareFunc(postID);
      },
    };
    this._addCommentWrapper = {
      handleEvent(event) {
        if (event.keyCode === 13) {
          const postID = parseInt(event.target.getAttribute('data-id'), 10);
          const text = event.target.value;
          addCommentFunc(postID, text);
        }
      },
    };
  }

  add(photoPosts) {
    const container = document.createElement('div');
    photoPosts.forEach((element) => {
      container.insertBefore(ConvertorService.toHTML(element), container.children[0]);
    });
    document.getElementById('feed').appendChild(container);
    Array.from(container.getElementsByClassName('userName')).forEach((element) => {
      element.addEventListener('click', this._toProfileWrapper);
    });
    Array.from(container.getElementsByClassName('like')).forEach((element) => {
      element.addEventListener('click', this._likeWrapper);
    });
    Array.from(container.getElementsByClassName('share')).forEach((element) => {
      element.addEventListener('click', this._shareWrapper);
    });
    Array.from(container.getElementsByClassName('addComment')).forEach((element) => {
      element.addEventListener('keydown', this._addCommentWrapper);
    });
    return container;
  }

  static remove(postID) {
    remove(postID);
  }

  static clear() {
    clear();
  }

  static like(postID) {
    like(postID);
  }

  static share(postID) {
    share(postID);
  }

  static addComment(postID) {
    addComment(postID);
  }
}
