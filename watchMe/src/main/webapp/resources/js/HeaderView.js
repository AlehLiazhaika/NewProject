
function toAddPhoto() {
  document.location.href = './addPhoto.html';
}

function toTopList() {

}

function toProfile(username) {
  localStorage.setItem('targetUser', username);
  document.location.href = './profile.html';
}

function toMyProfile() {
  toProfile(localStorage.getItem('me'));
}

class HeaderView {
  constructor() {
    document.getElementById('addPhotoBttn').addEventListener('click', toAddPhoto);
    document.getElementById('meBttn').addEventListener('click', toMyProfile);
  }
}
