document
  .getElementById('feed')
  .appendChild(
    new PhotoPost(
      1,
      'shtobikk',
      'Всем пока, улетаю далеко и надолго',
      './images/Daria/Daria.jpg',
    ).getHTML(),
  );

const likes = document.getElementsByClassName('like');
for (let i = 0; i < likes.length; ++i) {
  const like = likes[i];
  like.addEventListener('click', () => {
    if (like.getAttribute('src') === './images/like.svg') {
      like.setAttribute('src', './images/redLike.svg');
    } else {
      like.setAttribute('src', './images/like.svg');
    }
  });
}
