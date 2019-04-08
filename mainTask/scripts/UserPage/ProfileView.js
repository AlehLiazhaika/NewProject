
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

function toUser(user) {
  document.getElementById('title').innerText = user.username;
  document.getElementById('avaProfile').setAttribute('src', user.ava);
  document.getElementById('nickname').innerText = user.username;
  document.getElementById('status').innerText = user.status;
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
    toUser(user);
    if (user.username !== localStorage.getItem('me')) {
      this.addFollowBttn();
      if (user.isFollowing(localStorage.getItem('me'))) {
        recolorFollow();
      }
    } else {
      this.addSettingBttn();
    }
  }

  addFollowBttn() {
    document.getElementById('followBttn').style.display = 'block';
    document.getElementById('profileInfo').removeChild(document.getElementById('settingsBttn'));
    document.getElementById('profileInfo').style.width = '320px';
    document.getElementById('followBttn').addEventListener('click', this._follow);
  }

  addSettingBttn() {
    document.getElementById('settingsBttn').style.display = 'block';
    document.getElementById('profileInfo').removeChild(document.getElementById('followBttn'));
    document.getElementById('profileInfo').style.width = '250px';
    document.getElementById('settingsBttn').addEventListener('click', settingsOn);
    // document.getElementById('load').addEventListener('click', this._changeAvaWrapper);
    // document.getElementById('changeStatus').addEventListener('click', changeStatus);
    // document.getElementById('changeAccess').addEventListener('click', changeAccess);
  }

  follow(followers) {
    recolorFollow();
    this._profile.querySelector('#followersCounter').innerText = followers;
  }

  changeAva(image) {
    this._profile.querySelector('.avaProfile').setAttribute('src', image);
  }
}
