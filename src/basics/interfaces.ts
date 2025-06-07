
// interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

// 1. interfaces with functions
interface AddNumbers {
  (a: number, b: number): number;
}
//const add: AddNumbers = (a, b) => a + b;
//console.log(add(5, 3));

// 2. readonly properties https://www.typescriptlang.org/docs/handbook/interfaces.html
interface Point {
  readonly x: number;
  readonly y: number;
}

//let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

// 3. optional Properties
interface Product {
  name: string;
  price: number;
  discount?: number; // Optional property
}

//const product1: Product = { name: "Laptop", price: 1000 };
//const product2: Product = { name: "Smartphone", price: 700, discount: 50 };
//console.log(product1); // Output: { name: 'Laptop', price: 1000 }
//console.log(product2); // Output: { name: 'Smartphone', price: 700, discount: 50 }

// 4. with arrays
interface StringArray {
  [index: number]: string;
}

//const fruits: StringArray = ["Apple", "Banana", "Orange"];
//console.log(fruits[0]); // Output: Apple
//console.log(fruits[1]); // Output: Banana

// 5. with classes
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}

  sound(): void {
    console.log(`${this.name} says woof!`);
  }
}

class Cat implements Animal {
  constructor(public name: string) {}

  sound(): void {
    console.log(`${this.name} says meow!`);
  }
}

//const dog = new Dog("Buddy");
//const cat = new Cat("Whiskers");
//
//dog.sound(); // Output: Buddy says woof!
//cat.sound(); // Output: Whiskers says meow!
