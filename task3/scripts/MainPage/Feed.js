class Feed{
    constructor(){
        this._posts = [];
    }

    add(photoPost){
        if(PhotoPost.validate(photoPost) && this._posts.every(function(post){ return post.id != photoPost.id; })){
            this._posts.push(photoPost);
            return true;
        } else{
            return false;
        }
    }

    remove(id){
        let index = this._posts.map(getId).indexOf(id);
        if(~index){
            this._posts.splice(index, 1);
            return true;
        } else{
            return false;
        }
    }

    clear(){
        while(this._posts.length != 0){
            this._posts.pop();
        }
    }

    edit(id, photoPost){
        let index = this._posts.map(getId).indexOf(id);
        if(PhotoPost.validate(photoPost) && ~index){
            this._posts[index] = photoPost;
            return true;
        } else{
            return false;
        }
    }

    getPostsById(id){
        let index = this._posts.map(getId).indexOf(id);
        if(~index){
            return this._posts[index];
        }
    }

    getPosts(skip = 0, top = 10, filter = new DefaultFilter()){
        return this._posts.filter(element => {
            return filter.check(element);
        }).sort((o1, o2) => { return o1.creationTime.getTime() - o2.creationTime.getTime(); }).slice(skip, skip + top);
    }
}

function getId(post){
    return post.id;
}