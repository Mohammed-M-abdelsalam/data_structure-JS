function Node(value){
    this.value = value;
    this.next = null;
    this.previous = null;
}

class LL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return (this.size === 0) ? true : false;
    }
    
    getSize(){
        console.log(this.size);
    }

    //adding nodes
    pushBack(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.size++;
    }
    
    pushFront(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    
    insertAfter(value, after){
        if(this.isEmpty()){
            throw new Error("the list is empty");
        }
        let current = this.head;
        while(current !== null){
            if(current.value === after){
                const newNode = new Node(value);
                newNode.next = current.next;
                newNode.previous = current;
                current.next = newNode;
                this.size++;
                break;
            }
            current = current.next;
        }
        if(current === null) throw new Error(`there is no element with value ${after}`);
    }

    //removing nodes
    popBack(){
        if(this.isEmpty()) throw new Error("the list is empty");
        if(this.tail.previous === null){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        this.size--;
    }

    popFront(){
        if(this.isEmpty()) throw new Error("the list is empty");
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.previous = null;
        }
        this.size--
    }
    
    //traversing
    display(){
        if(this.head === null){
            throw new Error("the list is empty");
        }
        let current =  this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

}

try{

    const l = new LL();
    l.pushBack(1);
    l.pushBack(2);
    l.pushBack(3);
    l.pushFront(0);
    l.insertAfter(10, 0);
    l.display();
}catch(e){
    console.log(`Error: ${e.message}`);
}