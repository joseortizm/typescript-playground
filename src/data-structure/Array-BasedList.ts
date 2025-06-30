class ArrayList<T>{
    private listArray: T[]; // Array holding list elements
    private maxSize: number; // Maximum size of list
    private listSize: number; // Number of list items now
    private curr: number; // Position of current element

    constructor(defaultSize: number = 10){
        this.maxSize = defaultSize;
        this.listSize = this.curr = 0;
        this.listArray = new Array(this.maxSize);
    }

    // Reinitialize the list
    clear(): void {
        this.listSize = 0; // Reset the size
        this.listArray = new Array(this.maxSize); // Recreate array
    }

    // Insert "it" at current position 
    insert(it: T): void {
        if (this.listSize >= this.maxSize) {
            throw new Error("List capacity exceeded");
        }
        
        // Shift elements up
        for(let i = this.listSize; i > this.curr; i--){
            this.listArray[i] = this.listArray[i-1]; // to make room
        }

        this.listArray[this.curr] = it;
        this.listSize++; // Increment list size
    }

    // Append "it"
    append(it: T): void {
        if (this.listSize >= this.maxSize) {
            throw new Error("List capacity exceeded");
        }
        this.listArray[this.listSize++] = it;
    }   

    // Remove and return the current element
    remove(): T{
        if (this.curr <0 || this.curr>this.listSize){
            throw new Error("No element");
        }
        const it = this.listArray[this.curr] // Copy the element
        // Shift then down
        for(let i = this.curr; i < this.listSize-1; i++ ){
            this.listArray[i] = this.listArray[i+1];
        }
        this.listSize--; // Decrement size
        return it;
    }

    // Reset position
    moveToStart(): void {
        this.curr = 0;
    }
    
    // Set at end
    moveToEnd(): void {
        this.curr = this.listSize;
    }
 
    // Back up
    prev(): void {
        if (this.curr > 0){
            this.curr--;
        }
    }

    // Next
    next(): void {
        if (this.curr < this.listSize){
            this.curr++;
        }
    }
    
    // Return list size 
    length(): number {
        return this.listSize;
    }

    // Return current position
    currPos(): number {
        return this.curr;
    }

    // Set current list position to "pos"
    moveToPos(pos: number): void {
        if (pos >= 0 && pos <= this.listSize) {
            this.curr = pos;
        }else{
            throw new Error("Pos out of range");
        }
    }

    // Return current element
    getValue(): T{
        const it = this.listArray[this.curr];
        return it;
    }


    print(): void {
        let output = "";
        for (let i = 0; i < this.listSize; i++) {
            if (i === this.curr) {
                output += `[${this.listArray[i]}] `;
            } else {
                output += `${this.listArray[i]} `;
            }
        }
        console.log(output.trim());
    }

}

const list = new ArrayList<string>(5);
list.append("A");
list.append("B");
list.append("C");
list.append("D")
list.append("E")
list.moveToPos(1);
console.log("Current value:", list.getValue()); // B
console.log("Removed:", list.remove()); // B
list.print(); // A [C] D E
console.log("Length:", list.length()); // 4
list.moveToEnd();
console.log("Pos End:", list.currPos()); // 4
list.moveToStart()
console.log("Pos Start:", list.currPos()); // 0
list.next();
list.next();
list.next();
console.log("Pos:", list.currPos()); // 3
list.prev();
list.prev();
console.log("Pos:", list.currPos()); // 1



