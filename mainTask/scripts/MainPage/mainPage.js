/* global PhotoPost, Feed */

function signOut(event) {
  localStorage.removeItem('me');
  document.location.href = './auto.html';
}


document.getElementById('signOut').addEventListener('click', signOut);

const feed = new Feed(document.getElementById('feed'));
feed.add(JSON.parse(localStorage.getItem('posts')));

// submit
