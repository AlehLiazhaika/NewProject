/* global PhotoPost, Feed */

// document.getElementById('meBttn').style.backgroundImage = `url(${JSON.parse(localStorage.getItem(localStorage.getItem('me')))._ava})`;

const feed = new Feed(document.getElementById('feed'));
feed.add(JSON.parse(localStorage.getItem('posts')));

// submit
