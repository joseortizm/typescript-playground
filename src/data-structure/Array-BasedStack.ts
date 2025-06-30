class ArrayStack<T>{
    private stackArray: T[]; // Array holding stack elements
    private maxSize: number; // Maximum capacity of the stack
    private top: number;  // Index of the top element

    constructor(defaultSize: number = 10){
        this.maxSize = defaultSize;
        this.top = 0;
        this.stackArray = new Array(this.maxSize);
    }

    // Reinitialize the list
    clear(): void{
        this.top = 0;
        this.stackArray  = new Array(this.maxSize);
    }

    // Put "it" on stack
    push(it:T): void{
        if  (this.top >= this.maxSize){
            throw new Error("Stack is full");
        }
        this.stackArray[this.top++] = it;
    }

    // Pop top element
    pop(): T{
        if (this.top === 0){
            throw new Error("Stack is empty");
        }
        const it = this.stackArray[--this.top]; 
        return it;
    }

    // Return top element
    topValue(): T{
        if (this.top === 0){
            throw new Error("Stack is empty");
        }
        const it = this.stackArray[this.top-1];
        return it;
    }

    // Return length
    length(): number{
        return this.top;        
    }

    // Print all elements: from bottom to top
    print(): void {
        let output = "";
        for (let i = 0; i < this.top; i++) {
            output += `${this.stackArray[i]} `;
        }
        console.log(output.trim());
    }


}

const stack = new ArrayStack<string>(5);
stack.push("A");
stack.push("B");
stack.push("C");
stack.print(); // A B C

console.log("Top:", stack.topValue()); // C

console.log("Popped:", stack.pop()); // C
stack.print(); // A B

console.log("Length:", stack.length()); // 2

stack.clear();
console.log("Cleared. Length:", stack.length()); // 0





