







document.getElementById('feed').appendChild(new PhotoPost(1, 'shtobikk', "Всем пока, улетаю далеко и надолго", "./images/Daria/Daria.jpg").getHTML());

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