class Node{
    #value;
    #next;
    constructor(value){
        this.#value = value;
        this.#next = null;
    }

    getNext(){
        return this.#next;
    }

    setNext(next){
        this.#next= next;
    }

    getValue(){
        return this.#value;
    }

    setValue(value){
        this.#value = value;
    }
}

class Stack{
    #top;
    #size;
    #max;
    
    constructor(max){
        this.#top = null;
        this.#size = 0;
        this.#max = max;
    }

    isEmpty(){
        return this.#size == 0 ? true : false ;
    }
    
    isFull(){
        return this.#size == this.#max ? true : false ;
    }

    push(value){
        if(this.isFull()){
            throw new Error("the stack is full");
        }
        let newNode = new Node(value);
        newNode.setNext(this.#top);
        this.#top = newNode;
        this.#size++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("the stack is empty");
        }
        this.#top = this.#top.getNext();
        this.#size--;
    }

    getTop(){
        if(this.isEmpty()){
            throw new Error("the stack is empty");
        }
        return this.#top.getValue();
    }

    getSize(){
        return this.#size;
    }
    
    clear(){
        this.#top = null;
        this.#size = 0;
    }

    display(){
        if(this.isEmpty()){
            throw new Error("the stack is empty");
        }
        let current = this.#top; 
        while(current != null){
            console.log(current.getValue());
            current = current.getNext();
        }
    }
}

let s = new Stack(3);
try{
    s.push(10);
    s.push(20);
    s.push(30);
    console.log(s.getSize());
    console.log(s.getTop());
    s.display();
}catch(error){
    console.log(`Error: ${error.message}`);
}
