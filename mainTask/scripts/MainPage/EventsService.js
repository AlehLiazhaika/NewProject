/* global ConvertorService */


function recolorLike(event) {
  const like = event.target;
  like.classList.toggle('liked');
}

function showShare(event) {
  const shareBttn = event.target;
  shareBttn.classList.toggle('shared');
  shareBttn.parentNode.parentNode.lastElementChild.classList.toggle('sharePanelOn');
}

function commentFunc(event) {
  const text = event.target.value;
  if (event.keyCode === 13 && text !== '') {
    const comment = new Comment('noname', text);
    event.target.parentNode.parentNode.querySelector('.comments').appendChild(ConvertorService.toHTML(comment));
    event.target.value = ''; // eslint-disable-line no-param-reassign
  }
}

class EventsService {
  static toPhotoPosts(elements) {
    // Array.from(elements.getElementsByClassName('like')).forEach((element) => {
    //   element.addEventListener('click', recolorLike);
    // });
    // Array.from(elements.getElementsByClassName('share')).forEach((element) => {
    //   element.addEventListener('click', showShare);
    // });
    // Array.from(elements.getElementsByClassName('addComment')).forEach((element) => {
    //   element.addEventListener('keydown', commentFunc);
    // });
  }
}
