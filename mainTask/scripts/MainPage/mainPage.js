/* global PhotoPost, Feed, FeedView */

const text1 = 'Сегодня я получила премию от газеты “Московский комсомолец” на церемонии вручения наград “Звуковая дорожка” 🎼🎤 два года назад именно на этой премии состоялось одно из моих первых выступлений ❤ Сегодня я выиграла в категории одной из самых популярных певиц нашего шоу-бизнеса 🔝😍 Спасибо читателям МК за то, что выбрали в голосовании именно меня ❤💋 Для меня это большая честь 🔝За эти два года было много всего, но сегодня я хочу обратиться ко всем кто сидит на диванах, и осуждает меня и других, усердно работающих в своих сферах и добивающихся успехов артистов! Знайте, я очень много работаю и поэтому стою тут с этой наградой 🏆Это история не про то, как победить, а это история про то, что не нужно сдаваться даже когда тебя ненавидят, и не верят все! Ставьте цели, и добивайтесь их, и вы точно станете первыми! Я в вас верю ❤ Ваша Оля Бузова 👸🏼 #моилюдивсегдасомной';

const feed = new Feed();
const feedView = new FeedView(document.getElementById('feed'));
feed.add(new PhotoPost(1, 'shtobikk', 'Всем пока, улетаю далеко и надолго', './images/Daria/Daria.jpg'));
feed.add(new PhotoPost(2, 'Justin B', 'Just a couple of stratty boys', './images/Justin B/Justin.png'));
feed.add(new PhotoPost(3, 'arianeGRA', 'i love u doesn’t even begin to cover it. thank u sm.', './images/Ariane Gr/Ariane G.png'));
feed.add(new PhotoPost(4, 'buzova86', text1, './images/Buzova 86/buza.png'));
feed.add(new PhotoPost(5, 'maryanaro', '多くは彼らの外見について文句を言うが、だれも彼らの脳について文句を言うことはありません。', './images/Maryana Ro/maryana.png'));
feed.add(new PhotoPost(6, 'taylorswift', 'wineTime🍷🍷\n.\n.\n.\nwe\'re so drunk 😆', './images/Taylor Sw/taylor.png'));
feed.add(new PhotoPost(7, 'champagnepapi', 'happy Birthday to me 🍾💰🍾', './images/Drake/drake.png'));
feed.add(new PhotoPost(8, 'aleh_lezh', 'My perfect bouquet 🍁😶🍁', './images/Aleh L/aleh.png'));
feed.add(new PhotoPost(9, 'timabelorusskih', 'Be fresh 🍭', './images/Tima B/tima.png'));
feed.add(new PhotoPost(10, 'egorkreed', 'I\'m not gay😎😎😎', './images/Egor Kr/egor.png'));
feed.add(new PhotoPost(11, 'pewdiepie', 'shooting the haters🔫🔫🔫', './images/Pew DP/pew.png'));
feed.add(new PhotoPost(12, 'noname', 'test', './images/loading.svg'));

feedView.addAll(feed.posts);


function likeFunc() {
  const like = this;
  if (like.getAttribute('src') === './images/like.svg') {
    like.setAttribute('src', './images/redLike.svg');
    like.parentNode.parentNode.querySelector('.numOfLikes').innerHTML = "1 people <img src='./images/smallHeart.svg' height='15px'> it";
  } else {
    like.setAttribute('src', './images/like.svg');
    like.parentNode.parentNode.querySelector('.numOfLikes').innerHTML = "0 people <img src='./images/smallHeart.svg' height='15px'> it";
  }
}

function commentFunc(input, keyCode) {
  const text = input.value;
  if (keyCode === 13 && text !== '') {
    const comment = new Comment('noname', text);
    input.parentNode.parentNode.querySelector('.comments').appendChild(comment.getHTML());
    input.value = ''; // eslint-disable-line no-param-reassign
  }
}


// onclick to seteventlistener + this
