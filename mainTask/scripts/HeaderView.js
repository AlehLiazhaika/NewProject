
function addPhoto() {

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
    document.getElementById('meBttn').style.backgroundImage = `url(${JSON.parse(localStorage.getItem(localStorage.getItem('me')))._ava})`;
    document.getElementById('addPhotoBttn').addEventListener('click', addPhoto);
    document.getElementById('topHundredBttn').addEventListener('click', toTopList);
    document.getElementById('directBttn').addEventListener('click', toDirect);
    document.getElementById('meBttn').addEventListener('click', toMyProfile);
  }
}
