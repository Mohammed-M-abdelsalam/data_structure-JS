class HashMap{
    constructor(size = 30){
        this.size = size;
        this.buckets = new Array(size);
    }

    hash(key){
        return key.toString().length % this.size;
    }

    setItem(key, value){
        let index = this.hash(key);
        this.buckets[index] = [key, value];
    }
    
    getItem(key){
        let index = this.hash(key);
        if(this.buckets[index]){
            return this.buckets[index][1];
        }
        return null;
    }
}

myMap = new HashMap();
myMap.setItem('name', 'mohamed');
myMap.setItem('x', 'mohamed');
console.log(myMap.getItem('name'));