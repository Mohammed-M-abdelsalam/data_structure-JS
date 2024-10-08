class Queue{
    #arr;
    #front;
    #rear;
    #max;
    #size;
    constructor(max){
        this.#arr = []; 
        this.#front = 0; 
        this.#rear = -1;
        this.#max = max;
        this.#size = 0;
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
        this.#rear = (1 + this.#rear) % this.#max;
        this.#arr[this.#rear] = value;
        this.#size++;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("the queue is empty");
        }
        this.#front = (1 + this.#front) % this.#max;
        this.#size--;
    }
    
    getFront(){
        if(this.isEmpty()){
            throw new Error("the queue is empty");
        }
        return this.#arr[this.#front];
    }

    clear(){
        this.#front = 0;
        this.#rear = -1;
        this.#size = 0;
    }

    display(){
        if(this.isEmpty()){
            throw new Error("the queue is empty");
        }
        for(let i=this.#front; i != this.#rear; i=(1+i)%this.#max){
            console.log(this.#arr[i]);
        }
        console.log(this.#arr[this.#rear]);
    }
}


try{
    q = new Queue(3);
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.dequeue();
    q.enqueue(40);
    console.log(q.getFront());
    q.display();
    q.clear();
    q.display();
}catch(error){
    console.log(`ERROR: ${error.message}`);
}
