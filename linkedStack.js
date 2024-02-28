class node {
    constructor(data){
        this.head = data;
        this.next = null 
    }
}

class linkedlist {
    constructor(){
        this.head = null
    
    }


    atBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    checkFor(data){
        let current = this.head
        if (this.head == null){
            return false
        }
        while (current.next !== null){
            
            if (current.data === data){
                return true
            }

            current = current.next;

        }

       
    }

    atEnd(data){
        const newNode = new Node(data);

        if (this.head == null){
            this.head = newNode;
            return 
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode
        
        
    }

    reverse(){
        let current = this.head
        let prev = null
        let next = null

        if (this.head = null){
            return 
        }

        while (current !== null){
            next = current.next; 
            current.next = prev
            prev = current
            current = next 
        }

        this.head = prev



    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

}

class linkedliststack{
    constructor(){
        this.linkedlist = new LinkedList()

    }


    push(data){
        this.linkedlist.atBeginning(data)
    }
    pop(){
        const topData = this.linkedlist.head ? this.linkedlist.head.data : null; 
        this.linkedlist.atEnd;
        return topData
    }
    peek(){
        return this.linkedlist.head ? this.linkedlist.head.data : null; 
    }
}