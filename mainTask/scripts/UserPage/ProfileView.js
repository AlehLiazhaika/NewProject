
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

function toUser(user) {
  document.getElementById('title').innerText = user.username;
  document.getElementById('avaProfile').setAttribute('src', user.ava);
  document.getElementById('nickname').innerText = user.username;
  document.getElementById('status').value = user.status;
  document.getElementById('followingCounter').innerText = user._following.length;
  document.getElementById('followersCounter').innerText = user._followers.length;
}

class ProfileView {
  constructor(user, followFunc, changeAvaFunc, changeStatusFunc, changeAccessFunc) {
    this._followWrapper = {
      handleEvent(event) {
        followFunc();
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
    toUser(user);
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
}
