class PhotoPost{
    constructor(id, author, description, photoLink){
        this._id = id;
        this._author = author;
        this._description = description;
        this._hashTags = [];
        this._comments = [];
        this._likes = [];
        this._creationTime = new Date(Date.now());
        this._photoLink = photoLink;

        this._hashTags.push(description.match(/#[a-z][A-Z][0-9]*/g));
    }


    get id(){
        return this._id;
    }

    get author(){
        return this._author;
    }

    get description(){
        return this._description;
    }

    get hashTags(){
        return this._hashTags;
    }

    get comments(){
        return this._comments;
    }

    get likes(){
        return this._likes;
    }

    get creationTime(){
        return this._creationTime;
    }

    get photoLink(){
        return this._photoLink;
    }

    set id(id){
        this._id = id;
    }

    set author(author){
        this._author = author;
    }

    set description(description){
        this._description = description;
    }

    set hashTags(hashTags){
        this._hashTags = hashTags;
    }

    set comments(comments){
        this._comments = comments;
    }

    set likes(likes){
        this._likes = likes;
    }

    set creationTime(creationTime){
        this._creationTime = creationTime;
    }

    set photoLink(photoLink){
        this._photoLink = photoLink;
    }

    static validate(photoPost){
        return photoPost instanceof PhotoPost &&
            typeof photoPost.id === 'number' &&
            typeof photoPost.author === 'string' &&
            typeof photoPost.description === 'string' &&
            Array.isArray(photoPost.hashTags) &&
            Array.isArray(photoPost.hashTags) &&
            Array.isArray(photoPost.likes) &&
            photoPost.creationTime instanceof Date &&
            typeof photoPost.photoLink === 'string';
    }

    getHTML(){
        let post = document.createElement('div');
        post.className = 'post';

        let photoBase = document.createElement('div');
        photoBase.className = 'photoBase';

        let photo = document.createElement('img');
        photo.className = 'photo';
        photo.src = this._photoLink;
        photoBase.appendChild(photo);

        let controlPanel = document.createElement('div');
        controlPanel.className = 'controlPanel';

        let postHeader = document.createElement('div');
        postHeader.className = 'postHeader';

        let ava = document.createElement('img');
        ava.className = 'ava';
        ava.src = './images/Danila/ava.jpg';

        let userName = document.createElement('div');
        userName.className = 'userName';
        userName.innerText = this._author;

        postHeader.appendChild(ava);
        postHeader.appendChild(userName);

        let comments = document.createElement('div');
        comments.className = 'comments';

        let notice = document.createElement('div');
        notice.className = 'notice';
        notice.innerText = this._description;

        comments.appendChild(notice);

        let info = document.createElement('div');
        info.className = 'info';

        let div1 = document.createElement('div');
        let like = document.createElement('img');
        like.className = 'like button';
        like.src = './images/like.svg';
        like.setAttribute('height', '30px');
        let share = document.createElement('img');
        share.className = 'share button';
        share.src = './images/share.svg';
        share.setAttribute('height', '30px')
        div1.appendChild(like);
        div1.appendChild(share);

        let numOfLikes = document.createElement('div');
        numOfLikes.className = 'numOfLikes';
        numOfLikes.innerHTML = this._likes.length + ' <img src=\'images/smallHeart.svg\' height=\'15px\'> it';
        let timeOfPost = document.createElement('div');
        timeOfPost.className = 'timeOfPost';
        timeOfPost.innerHTML = '3 minutes ago';

        info.appendChild(div1);
        info.appendChild(numOfLikes);
        info.appendChild(timeOfPost);

        let div2 = document.createElement('div');
        div2.innerHTML = '<input class=\'addComment\' placeholder=\'Add comment...\'>';

        controlPanel.appendChild(postHeader);
        controlPanel.appendChild(comments);
        controlPanel.appendChild(info);
        controlPanel.appendChild(div2);

        post.appendChild(photoBase);
        post.appendChild(controlPanel);
        return post;
    } //75 LINES CARRRLLLL
}