class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(element){
        if (this.isEmpty()){
            return "underflow"
        }
        this.items.pop(element)
    }

    isEmpty(){
        return this.items.length === 0; 
    }

    peek(){
        if (this.isEmpty()){
            return "no elements to be found"
        }
        return this.items[this.items.length -1 ]
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join(''));
    }

}

const stack = new Stack();
stack.push('hello')
stack.push('bye')





function search (value) {
    for (let i = 0; i < stack.size(); i++){
        if (stack.items[i] == value){
            return stack.items[i]
        }
    }
    return "not found"

}

//for (let i = 0; i < stack.size(); i++){
    //console.log(stack.items[i])
//}

console.log(search('hellosa'))