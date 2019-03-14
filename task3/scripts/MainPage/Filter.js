class Filter{
    constructor(property, value){
        this.property = property;
        this.value = value;
    }

    check(element){
        if(element[this.property] === this.value){
            return true;
        } else{
            return false;
        }
    }
}

class DefaultFilter{
    check(element){
        return true;
    }
}