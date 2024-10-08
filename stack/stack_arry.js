class Stack{
    #arr;
    #top;
    #max;
    #size;
    constructor(max){
        this.#arr = [];
        this.#top = -1;
        this.#size = 0;
        this.#max = max;
    }
    
    isEmpty(){
        return this.#size == 0 ? true : false;
    }

    isFull(){
        return this.#size == this.#max ? true : false;
    }

    getTop(){
        if(this.isEmpty()){
            throw new Error("the stack is empty");
        }
        return this.#arr[this.#top];
    }

    push(value){
        if(this.isFull()){
            throw new Error("the stack is full");
        }
        this.#top++;
        this.#size++;
        this.#arr[this.#top] = value;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("the stack is empty");
        }
        this.#arr[this.#top] = null; 
        this.#size--;
        this.#top--;
    }
    
    clear(){
        this.#arr = [];
        this.#top = -1;    
        this.#size = 0;    
    }

    getSize(){
        return this.#size;
    }

    display(){
        if(this.isEmpty()){
            throw new Error("the stack is empty");
        }
       for(let i=this.#top; i>=0; i--){
            console.log(this.#arr[i]);
       }
    }
}

try{
    s = new Stack(3);
    s.push(10);
    s.push(20);
    s.push(30);
    s.pop();
    console.log(s.getTop());
    console.log("-------------");
    s.display();
    s.clear();
    s.display();
}catch(error){
    console.log(`ERROR: ${error.message}`)
}





