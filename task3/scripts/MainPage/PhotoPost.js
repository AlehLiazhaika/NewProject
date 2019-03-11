class PhotoPost{
    constructor(id, author, description, photoLink){
        this.id = id;
        this.author = author;
        this.description = description;
        this.hashTags = [];
        this.comments = [];
        this.likes = [];
        this.creationTime = new Date(Date.now());
        this.photoLink = photoLink;
        this.hashTags.push(description.match(/#[a-z][A-Z][0-9]*/g));
    }

    addComment(comment){
        this.comments.push(comment);
    }

    like(user){
        likes.push(user);
    }

    static filters(){
        return {
            'IDComparator': function(o1, o2){
                if(PhotoPost.validate(o1) && PhotoPost.validate(o2)){
                    return o1.id - o2.id;
                } else{
                    return 0;
                }
            },
            'authorComparator': function(o1, o2){
                if(PhotoPost.validate(o1) && PhotoPost.validate(o2)){
                    return o1.author.localeCompare(o2.author);
                } else{
                    return 0;
                }
            },
            'creationTimeComparator': function(o1, o2){
                if(PhotoPost.validate(o1) && PhotoPost.validate(o2)){
                    return o1.getTime() - o2.getTime();
                } else{
                    return 0;
                }
            }
        }
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
        photo.src = this.photoLink;
        photoBase.appendChild(photo);

        let controlPanel = document.createElement('div');
        controlPanel.className = 'controlPanel';

        let postHeader = document.createElement('div');
        postHeader.className = 'postHeader';

        let ava = document.createElement('img');
        ava.className = 'ava';
        ava.src = './images/Justin B/ava.jpg';

        let userName = document.createElement('div');
        userName.className = 'userName';
        userName.innerText = this.author;

        postHeader.appendChild(ava);
        postHeader.appendChild(userName);

        let comments = document.createElement('div');
        comments.className = 'comments';

        let notice = document.createElement('div');
        notice.className = 'notice';
        notice.innerText = this.description;

        comments.appendChild(notice);

        let info = document.createElement('div');
        info.className = 'info';

        let div1 = document.createElement('div');
        let like = document.createElement('img');
        like.className = 'button';
        like.src = './images/like.svg';
        like.setAttribute('height', '30px')
        let share = document.createElement('img');
        share.className = 'button';
        share.src = './images/share.svg';
        share.setAttribute('height', '30px')
        div1.appendChild(like);
        div1.appendChild(share);

        let numOfLikes = document.createElement('div');
        numOfLikes.className = 'numOfLikes';
        numOfLikes.innerHTML = this.likes.length + ' <img src=\'images/smallHeart.svg\' height=\'15px\'> it';
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