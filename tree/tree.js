function Node(value){
    this.value = value;
    this.left = null;
    this.right = null
}


class BST{
    constructor(){
        this.root = null;
    }

    //inserting a value
    pushNode(value, r){
        if(r === null){
            return new Node(value);
        }else if(value < r.value){
            r.left = this.pushNode(value, r.left);
        }else{
            r.right = this.pushNode(value, r.right);
        }
        return r;
    }

    push(value){
        this.root = this.pushNode(value, this.root);
    }

    //searching a value
    searchNode(value, r){
        if(r == null){
            return;
        }
        if(value === r.value){
            return r;
        }else if(value < r.value){
            return this.searchNode(value, r.left);
        }else{
            return this.searchNode(value, r.right);
        }
    }

    search(value){
        const node = this.searchNode(value, this.root);
        return (node) ? true : false;
    }

    //getting the menimum value
    minNode(r){
        if(r === null){
            return ;
        }else if(r.left === null){
            return r;
        }else{
            return this.minNode(r.left);
        }
    }
    min(){
        let m = this.minNode(this.root);
        return m.value;
    }

    //geting the maximum value
    maxNode(r){
        if(r === null){
            return;
        }else if(r.right === null){
            return r;
        }else{
            return this.maxNode(r.right);
        }
    }
    max(){
        let m = this.maxNode(this.root);
        return m.value;
    }

    //delete a node 
    deleteNode(value, r){
        if(r === null){
            return null;
        }else if(value < r.value){
            r.left = this.deleteNode(value, r.left)
        }else if(value > r.value){
            r.right = this.deleteNode(value, r.right)
        }else{
            if(r.left === null && r.right === null){
                r = null;
            }else if(r.left === null && r.right !== null){
                r.value = r.right.value;
                delete r.right;
                r.right = null
            }else if(r.left !== null && r.right === null){
                r.value = r.left.value;
                delete r.left;
                r.left = null
            }else{
                let max = this.maxNode(r.left);
                r.value = max.value;
                r.left = this.deleteNode(max.value, r.left);
            }
        }
        return r;
    }

    delete(value){
        return this.deleteNode(value, this.root)
    }


    //traversing
    inOrderNode(r){
        if(r !== null){
            this.inOrderNode(r.left);
            console.log(r.value);
            this.inOrderNode(r.right);
        }else{
            return
        }
    }
    inOrder(){
        this.inOrderNode(this.root);
    }

    preOrder(r){
        if(r !== null){
            console.log(r.value);
            this.preOrder(r.left);
            this.preOrder(r.right);
        }else{
            return;
        }
    }

    postOrder(r){
        if(r !== null){
            this.preOrder(r.left);
            this.preOrder(r.right);
            console.log(r.value);
        }else{
            return;
        }
    }
}


t = new BST();
t.push(10)
t.push(20)
t.push(5)
t.push(6)
t.push(15)
t.push(50)
t.delete(10);
console.log('-----------------');
t.inOrder()
// t.preOrder(t.root)
// t.postOrder(t.root)


