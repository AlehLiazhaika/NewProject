/* global PhotoPost, FeedModel, FeedView */

const text1 = 'Сегодня я получила премию от газеты “Московский комсомолец” на церемонии вручения наград “Звуковая дорожка” 🎼🎤 два года назад именно на этой премии состоялось одно из моих первых выступлений ❤ Сегодня я выиграла в категории одной из самых популярных певиц нашего шоу-бизнеса 🔝😍 Спасибо читателям МК за то, что выбрали в голосовании именно меня ❤💋 Для меня это большая честь 🔝За эти два года было много всего, но сегодня я хочу обратиться ко всем кто сидит на диванах, и осуждает меня и других, усердно работающих в своих сферах и добивающихся успехов артистов! Знайте, я очень много работаю и поэтому стою тут с этой наградой 🏆Это история не про то, как победить, а это история про то, что не нужно сдаваться даже когда тебя ненавидят, и не верят все! Ставьте цели, и добивайтесь их, и вы точно станете первыми! Я в вас верю ❤ Ваша Оля Бузова 👸🏼 #моилюдивсегдасомной';

const arr = [];
const feed = new FeedModel();
const feedView = new FeedView(document.getElementById('feed'));
arr.push(new PhotoPost(1, 'shtobikk', 'Всем пока, улетаю далеко и надолго', './images/Daria/Daria.jpg'));
arr.push(new PhotoPost(2, 'Justin B', 'Just a couple of stratty boys', './images/Justin B/Justin.png'));
arr.push(new PhotoPost(3, 'arianeGRA', 'i love u doesn’t even begin to cover it. thank u sm.', './images/Ariane Gr/Ariane G.png'));
arr.push(new PhotoPost(4, 'buzova86', text1, './images/Buzova 86/buza.png'));
arr.push(new PhotoPost(5, 'maryanaro', '多くは彼らの外見について文句を言うが、だれも彼らの脳について文句を言うことはありません。', './images/Maryana Ro/maryana.png'));
arr.push(new PhotoPost(6, 'taylorswift', 'wineTime🍷🍷\n.\n.\n.\nwe\'re so drunk 😆', './images/Taylor Sw/taylor.png'));
arr.push(new PhotoPost(7, 'champagnepapi', 'happy Birthday to me 🍾💰🍾', './images/Drake/drake.png'));
arr.push(new PhotoPost(8, 'aleh_lezh', 'My perfect bouquet 🍁😶🍁', './images/Aleh L/aleh.png'));
arr.push(new PhotoPost(9, 'timabelorusskih', 'Be fresh 🍭', './images/Tima B/tima.png'));
arr.push(new PhotoPost(10, 'egorkreed', 'I\'m not gay😎😎😎', './images/Egor Kr/egor.png'));
arr.push(new PhotoPost(11, 'pewdiepie', 'shooting the haters🔫🔫🔫', './images/Pew DP/pew.png'));

feedView.addAll(arr);

// как разделять классы и что в них писать - два класса: один лог другой вью и треттий общий класс
// где добавлять обработчики событий - там же где и создал элемент ОК
// что если разные js файлы вызывают друг друга - потом
// задавать положение центра элемента (см. лайк) - DONE
// submit
// стандартное поведение
