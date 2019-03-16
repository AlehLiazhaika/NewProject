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
        let postTemplate = document.getElementById('postTemplate').content.querySelector('.post');
        postTemplate.querySelector('.photo').setAttribute('src', this._photoLink);
        //postTemplate.querySelector('ava')
        postTemplate.querySelector('.userName').textContent = this._author;
        postTemplate.querySelector('.notice').textContent = this._description;
        console.log(this._likes.length);
        postTemplate.querySelector('.numOfLikes').innerHTML = '0 <img src=\'./images/smallHeart.svg\' height=\'15px\'> it';
        postTemplate.querySelector('.timeOfPost').textContent = Date.now() - this._creationTime + ' seconds ago' ;
        return postTemplate.cloneNode(true);
    }
}