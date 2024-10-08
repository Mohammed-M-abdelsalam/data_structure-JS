class Node{
    #value;
    #next;
    constructor(value){
        this.#next = null;
        this.#value = value;
    }

    getNext(){
        return this.#next;
    }

    setNext(next){
        this.#next = next;
    }

    getValue(){
        return this.#value;
    }

    setValue(value){
        this.#value = value;
    }
}

class Queue{
    #front;
    #rear;
    #size;
    #max;

    constructor(max){
        this.#front = null;
        this.#rear = null;
        this.#size = 0;
        this.#max = max;
    }

    isEmpty(){
        return this.#size == 0 ? true : false;
    }

    isFull(){
        return this.#size == this.#max ? true : false;
    }

    enqueue(value){
        if(this.isFull()){
            throw new Error("the queue is full");
        }
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.#front = newNode;
            this.#rear = newNode;
        }else{
            this.#rear.setNext(newNode);
            this.#rear = newNode;
        }
        this.#size++;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("the queue is empty");
        }
        this.#front = this.#front.getNext();
        this.#size--;
    }

    clear(){
        this.#front = null;
        this.#rear = null;
        this.#size = 0;
    }

    getFront(){
        if(this.isEmpty()){
            throw new Error("the queue is empty");
        }
        return this.#front.getValue();
    }

    display(){
        if(this.isEmpty()){
            throw new Error("the queue is empty");
        }
        let current = this.#front;
        while(current != null){
            console.log(current.getValue());
            current = current.getNext();
        }
    }
}

try{
    let q = new Queue(3);
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.dequeue();
    q.enqueue(40);
    console.log(q.getFront());
    console.log("----------------------");
    q.display();
    q.clear()
    q.display();

}catch(e){
    console.log(`Error: ${e.message}`);
}

class Person{
    constructor(){
        this.name = "mohamed";
    }

    getName = function(){
        return this.name;
    }
}


