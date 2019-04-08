
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
  constructor(user, follow, changeAva, changeStatus, changeAccess) {
    this._profile = document.getElementById('profile');
    this._follow = follow;
    this._changeAvaWrapper = {
      handleEvent(event) {
        const data = document.getElementById('changeAva').files[0];
        const image = window.URL.createObjectURL(new Blob([data], { type: 'image/png, image/jpeg' }));
        changeAva(image);
      },
    };
    this._changeStatusWrapper = {
      handleEvent(event) {
        if (event.keyCode === 13) {
          const status = event.target.value;
          changeStatus(status);
        }
      },
    };
    this._changeAccessWrapper = {
      handleEvent(event) {
        changeAccess();
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
    document.getElementById('followBttn').addEventListener('click', this._follow);
  }

  addPersonalBttn() {
    document.getElementById('settingsBttn').style.display = 'block';
    document.getElementById('signOutBttn').style.display = 'block';
    document.getElementById('settingsBttn').addEventListener('click', settingsOn);
    document.getElementById('signOutBttn').addEventListener('click', signOut);
    document.getElementById('status').addEventListener('keydown', this._changeStatusWrapper);
    document.getElementById('changeStatus').addEventListener('click', this.changeStatus);
    document.getElementById('changeAccess').addEventListener('click', this._changeAccessWrapper);
  }

  follow(followers) {
    recolorFollow();
    this._profile.querySelector('#followersCounter').innerText = followers;
  }

  changeAva(image) {
    this._profile.querySelector('#avaProfile').setAttribute('src', image);
  }

  changeStatus() {
    document.getElementById('status').toggleAttribute('readonly');
    document.getElementById('status').classList.toggle('activeStatus');
  }

  changeAccess() {
    this._profile.querySelector('#privacyImg').classList.toggle('privatePrivacyImg');
  }
}
