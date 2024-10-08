function Node(value){
    this.value = value;
    this.next = null;
}

class LinkedList{
    constructor(){
        this.head = null; 
    }

    pushBack(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = newNode;
        }
    }

    pushFront(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    popBack(){
        if(this.head == null){
            throw Error("the list is empty");
        }else if(this.head.next === null){
            this.head = null;
            return
        }
        let current = this.head;
        while(current.next.next !== null){
            current = current.next;
        }
        current.next = null;
    }
    
    popFront(){
        if(this.head == null){
            throw Error("the list is empty");
        }else if(this.head.next === null){
            this.head = null;
            return
        }

        this.head = this.head.next;
    }

    display(){
        if(this.head === null){
            throw Error("the list is empty");
        }
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        } 
    }

}

try{
    let l = new LinkedList();
    l.pushBack(10)
    l.pushBack(20)
    l.pushBack(30)
    l.display()
}catch(e){
    console.log(`ERROR: ${e}`);
}

