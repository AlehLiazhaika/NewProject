

let feed = new Feed();
let p = new PhotoPost(1, 'me', "hello world", "./images/Drake/drake.png");

feed.add(new PhotoPost(1, 'me', "hello world", "./images/Drake/drake.png"));
feed.add(new PhotoPost(2, 'me', "hello world", "./images/Drake/drake.png"));
feed.add(new PhotoPost(3, 'you', "hello world", "./images/Drake/drake.png"));
feed.add(new PhotoPost(4, 'you', "hello world", "./images/Drake/drake.png"));
feed.add(new PhotoPost(5, 'me', "hello world", "./images/Drake/drake.png"));






document.getElementById('feed').appendChild(new PhotoPost(1, 'Danila', "Я Маша, приятно познакомиться", "./images/Danila/Danila.jpg").getHTML());

let likes = document.getElementsByClassName("like");
for(let i = 0; i < likes.length; ++i){
    let like = likes[i];
    like.addEventListener('click', function(){
        if(like.getAttribute('src') == './images/like.svg'){
            like.setAttribute("src", "./images/redLike.svg");
        } else{
            like.setAttribute("src", "./images/like.svg");
        }
    })
};