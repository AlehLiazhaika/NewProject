let photoPosts = function(){
    let posts = [];
    return {
        'add': function(photoPost){
            if(PhotoPost.validate(photoPost) && posts.every(function(post){ return post.id != photoPost.id; })){
                posts.push(photoPost);
                return true;
            } else{
                return false;
            }
        },
        'remove': function(id){
            let index = posts.map(getId).indexOf(id);
            if(~index){
                posts.splice(index, 1);
                return true;
            } else{
                return false;
            }
        },
        'edit': function(id, photoPost){
            let index = posts.map(getId).indexOf(id);
            if(PhotoPost.validate(photoPost) && ~index){
                posts[index] = photoPost;
                return true;
            } else{
                return false;
            }
        },
        'get': function(id){
            let index = posts.map(getId).indexOf(id);
            if(~index){
                return posts[index];
            }
        },
        'getAll': function(){
            return posts;
        },

        'getPosts': function(skip = 0, top = 10, filter = PhotoPost.filters.creationTime){
            return posts.sort(filter).slice(skip, skip + top);
        }
    }
}();

function getId(post){
    return post.id;
}