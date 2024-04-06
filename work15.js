class Stack {
    constructor() {
        this.items = [];
    }

    push(a) {
        this.items.push(a);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack)
console.log(stack.peek()); 
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());



