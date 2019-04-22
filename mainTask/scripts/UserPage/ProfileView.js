/* global ConvertorService, PhotoPost, Comment */

function settingsOn(event) {
  event.target.classList.toggle('spin');
  document.getElementById('profileSettings').classList.toggle('profileSettingsOn');
}

function recolorFollow() {
  const bttn = document.getElementById('followBttn');
  bttn.classList.toggle('unfollowBttn');
  if (bttn.classList.length === 2) {
    bttn.innerText = 'unfollow';
  } else {
    bttn.innerText = 'follow';
  }
}

function signOut() {
  localStorage.removeItem('me');
  document.location.href = './auto.html';
}

function goToProfile(username) {
  localStorage.setItem('targetUser', username);
  document.location.href = './profile.html';
}

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

function share(postID) {
  const shareBttn = document.getElementById(`${postID}`).querySelector('.share');
  toggleSharePanel(shareBttn);
}

function addComment(postID) {
  const input = document.getElementById(`${postID}`).querySelector('.addComment');
  showComment(input);
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

function openPostWrapper(event, likeFunc, shareFunc, addCommentFunc) {
  const id = event.target.getAttribute('data-id');
  const posts = JSON.parse(localStorage.getItem('posts'));
  const post = PhotoPost.parse(posts.find(element => element._id === parseInt(id, 10)));
  const grayBack = document.getElementById('grayBackTemplate').content.querySelector('.grayBack').cloneNode(true);
  grayBack.appendChild(ConvertorService.toHTML(post));
  document.getElementById('body').appendChild(grayBack);
  document.querySelector('.grayBack').addEventListener('click', (addedEvent) => {
    if (addedEvent.target === grayBack) {
      document.getElementById('body').removeChild(grayBack);
    }
  });
  document.querySelector('.ava').addEventListener('click', (addedEvent) => {
    goToProfile(addedEvent.target.getAttribute('data-user'));
  });
  Array.from(document.getElementsByClassName('userName')).forEach((element) => {
    element.addEventListener('click', (addedEvent) => {
      goToProfile(addedEvent.target.getAttribute('data-user'));
    });
  });
  document.querySelector('.like').addEventListener('click', (addedEvent) => {
    const postID = parseInt(addedEvent.target.getAttribute('data-id'), 10);
    likeFunc(postID);
  });
  document.querySelector('.share').addEventListener('click', (addedEvent) => {
    const postID = parseInt(addedEvent.target.getAttribute('data-id'), 10);
    shareFunc(postID);
  });
  document.querySelector('.addComment').addEventListener('keydown', (addedEvent) => {
    if (addedEvent.keyCode === 13) {
      const postID = parseInt(addedEvent.target.getAttribute('data-id'), 10);
      const text = addedEvent.target.value;
      addCommentFunc(postID, text);
    }
  });
}

function showMiniPosts(user, openPostWrapperFunс, likeFunc, shareFunc, addCommentFunc) {
  if (user.username !== localStorage.getItem('me') && user.isPrivate() && !user.isFollowing(localStorage.getItem('me'))) {
    document.getElementById('userPhotos').innerHTML = '';
    const warning = document.getElementById('privateAccountTemplate').content.querySelector('.privateAccount').cloneNode(true);
    document.getElementById('userPhotos').appendChild(warning);
  } else {
    document.getElementById('userPhotos').innerHTML = '';
    const { miniPosts } = user;
    const userPhotos = document.getElementById('userPhotos');
    miniPosts.forEach((miniPost) => {
      userPhotos.insertBefore(ConvertorService.toHTML(miniPost), userPhotos.firstChild);
    });
    Array.from(userPhotos.getElementsByClassName('miniPost')).forEach((element) => {
      element.addEventListener('click', (event) => { openPostWrapperFunс(event, likeFunc, shareFunc, addCommentFunc); });
    });
  }
}

class ProfileView {
  constructor(user, followFunc, changeAvaFunc, changeStatusFunc, changeAccessFunc, likeFunc, shareFunc, addCommentFunc) {
    this._followWrapper = {
      handleEvent(event) {
        followFunc();
        showMiniPosts(user, openPostWrapper, likeFunc, shareFunc, addCommentFunc);
      },
    };
    this._changeAvaWrapper = {
      handleEvent(event) {
        const image = `./images/usersPhotos/${document.getElementById('changeAva').files[0].name}`;
        changeAvaFunc(image);
      },
    };
    this._changeStatusWrapper = {
      handleEvent(event) {
        if (event.keyCode === 13) {
          const status = event.target.value;
          changeStatusFunc(status);
        }
      },
    };
    this._changeAccessWrapper = {
      handleEvent(event) {
        changeAccessFunc();
      },
    };
    this.toUser(user);
    showMiniPosts(user, openPostWrapper, likeFunc, shareFunc, addCommentFunc);
  }

  toUser(user) {
    document.getElementById('title').innerText = user.username;
    document.getElementById('avaProfile').setAttribute('src', user.ava);
    document.getElementById('nickname').innerText = user.username;
    document.getElementById('status').value = user.status;
    document.getElementById('followingCounter').innerText = user._following.length;
    document.getElementById('followersCounter').innerText = user._followers.length;
    if (user.username !== localStorage.getItem('me')) {
      this.addFollowBttn();
      if (user.isFollowing(localStorage.getItem('me'))) {
        recolorFollow();
      }
    } else {
      this.addPersonalBttn();
      if (user.isPrivate()) {
        document.getElementById('privacyImg').classList.add('privatePrivacyImg');
      }
    }
  }

  addFollowBttn() {
    document.getElementById('followBttn').style.display = 'block';
    document.getElementById('followBttn').addEventListener('click', this._followWrapper);
  }

  addPersonalBttn() {
    document.getElementById('settingsBttn').style.display = 'block';
    document.getElementById('signOutBttn').style.display = 'block';
    document.getElementById('settingsBttn').addEventListener('click', settingsOn);
    document.getElementById('signOutBttn').addEventListener('click', signOut);
    document.getElementById('status').addEventListener('keydown', this._changeStatusWrapper);
    document.getElementById('changeAva').addEventListener('change', this._changeAvaWrapper);
    document.getElementById('changeStatus').addEventListener('click', ProfileView.changeStatus);
    document.getElementById('changeAccess').addEventListener('click', this._changeAccessWrapper);
  }

  static follow(followers) {
    recolorFollow();
    document.getElementById('followersCounter').innerText = followers;
  }

  static changeAva(image) {
    document.getElementById('avaProfile').setAttribute('src', image);
  }

  static changeStatus() {
    document.getElementById('status').toggleAttribute('readonly');
    document.getElementById('status').classList.toggle('activeStatus');
  }

  static changeAccess() {
    document.getElementById('privacyImg').classList.toggle('privatePrivacyImg');
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
