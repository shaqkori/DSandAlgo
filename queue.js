class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element);

    }

    dequeue(){
        if (this.isEmpty()){
            return 'underflow'
        }
        return this.items.shift();

    }

    front(){
        if (this.isEmpty()){
            return 'no items'
        }

        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    contains(element){
        return this.items.include(element)
    }

    print(){
        console.log(this.items.join(''));
    }
}

const queue  = new Queue()
queue.enqueue('hello')
console.log(c)
queue.print()