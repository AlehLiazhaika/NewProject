/* global ConvertorService */


function recolorLike(like) {
  like.classList.toggle('liked');
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

function goToProfile(username) {
  localStorage.setItem('targetUser', username);
  document.location.href = './profile.html';
}

class FeedView {
  constructor(like, share, addComment) {
    this._feed = document.getElementById('feed');
    this._toProfileWrapper = {
      handleEvent(event) {
        goToProfile(event.target.innerText);
      },
    };
    this._likeWrapper = {
      handleEvent(event) {
        const postID = parseInt(event.target.getAttribute('data-id'), 10);
        like(postID);
      },
    };
    this._shareWrapper = {
      handleEvent(event) {
        const postID = parseInt(event.target.getAttribute('data-id'), 10);
        share(postID);
      },
    };
    this._addCommentWrapper = {
      handleEvent(event) {
        if (event.keyCode === 13) {
          const postID = parseInt(event.target.getAttribute('data-id'), 10);
          const text = event.target.value;
          addComment(postID, text);
        }
      },
    };
  }

  add(photoPosts) {
    const container = document.createElement('div');
    photoPosts.forEach((element) => {
      container.insertBefore(ConvertorService.toHTML(element), container.children[0]);
    });
    this._feed.appendChild(container);
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

  remove(postID) {
    const element = this._feed.querySelector(`#${CSS.escape(postID)}`);
    element.parentNode.removeChild(element);
  }

  clear() {
    this._feed.innerHTML = '';
  }

  like(postID) {
    const post = this._feed.querySelector(`#${CSS.escape(postID)}`);
    const like = post.querySelector('.like');
    const likeCounter = post.querySelector('.counter');
    recolorLike(like);
    if (like.classList.length === 2) {
      changeLikeCounter(likeCounter, 1);
    } else {
      changeLikeCounter(likeCounter, -1);
    }
  }

  share(postID) {
    const shareBttn = this._feed.querySelector(`#${CSS.escape(postID)}`).querySelector('.share');
    toggleSharePanel(shareBttn);
  }

  addComment(postID) {
    const input = this._feed.querySelector(`#${CSS.escape(postID)}`).querySelector('.addComment');
    showComment(input);
  }
}
