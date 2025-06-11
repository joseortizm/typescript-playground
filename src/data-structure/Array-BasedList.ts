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

    // Set current list position to "pos"
    moveTo(pos: number): void {
        if (pos >= 0 && pos <= this.listSize) {
            this.curr = pos;
        }else{
            throw new Error("Pos out of range");
        }
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




    moveToStart(): void {
        this.curr = 0;
    }
   
    moveToEnd(): void {
        this.listSize;
    }
  
    prev(): void {
        if (this.curr > 0){
            this.curr--;
        }
    }
 
    next(): void {
        if (this.curr < this.listSize){
            this.curr++;
        }
    }
    

    
  


}

const list = new ArrayList<string>(5);
list.append("A");
list.append("B");
list.append("C");
list.moveTo(1);
list.print(); 







