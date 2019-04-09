
function toAddPhoto() {
  document.location.href = './addPhoto.html';
}

function toTopList() {

}

function toDirect() {

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
    document.getElementById('topHundredBttn').addEventListener('click', toTopList);
    document.getElementById('directBttn').addEventListener('click', toDirect);
    document.getElementById('meBttn').addEventListener('click', toMyProfile);
  }
}
