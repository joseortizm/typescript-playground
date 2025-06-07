// basic 1
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

//const person1 = new Person("Jose", 36);
//person1.greet();

// basic 2
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  greet(): void {
    console.log(`X is ${this.x} and Y is ${this.y}.`);
  }

}

//const point = new Point(5, 10);
//point.greet();

// basic 3: constructor overloads
class Point2 {
  x: number = 0;
  y: number = 0;
 
  // Constructor overloads
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    if (typeof x === "number") {
      // If 'x' is a number, assign both values directly
      this.x = x;
      this.y = y;
    } else if (typeof x === "string") {
      // If 'x' is a string, attempt to split it into two values
      const coordinates = x.split(',').map(Number);
      if (coordinates.length === 2) {
        this.x = coordinates[0];
        this.y = coordinates[1];
      } else {
        throw new Error("The string must be in the format 'x,y'.");
      }
    }
  }

  // Method to display the coordinates
  display() {
    console.log(`Coordinates: (${this.x}, ${this.y})`);
  }
}

//const mypoint1 = new Point2(5, 10);
//mypoint1.display();  // Coordinates: (5, 10)
//const mypoint2 = new Point2("20,30");
//mypoint2.display();  // Coordinates: (20, 30)

// Private and public
class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

//const account = new BankAccount("Bob", 1000);
//account.deposit(500);
//console.log(account.getBalance()); // 1500
//// account.balance // Error: 'balance' is private


// Extends and super
class Animal {
  //Constructor Shorthand
  constructor(public name: string) {} 

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }

  move(distance: number): void {
    console.log("Dog is running...");
    super.move(distance);
  }
}

//const dog = new Dog("Buddy");
//dog.bark();
//dog.move(10);

// Interfaces with class:
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

//const sonar = new Sonar(); 
//sonar.ping();

// Static:
class Mathematics {
  // Static property PI
  static PI: number = 3.141592653589793;

  // Non-static (instance) property
  radius: number;

  // Constructor to initialize the non-static property (radius)
  constructor(radius: number) {
    this.radius = radius;
  }

  // Static method to calculate the area of a circle
  static areaCircle(radius: number): number {
    return Mathematics.PI * radius * radius;
  }

  // Static method to calculate the circumference of a circle
  static circumferenceCircle(radius: number): number {
    return 2 * Mathematics.PI * radius;
  }

  // Non-static method to use the instance property
  area(): number {
    return Mathematics.PI * this.radius * this.radius;
  }

  circumference(): number {
    return 2 * Mathematics.PI * this.radius;
  }
}

//// Create an instance of the Mathematics class
//const myCircle = new Mathematics(5);  // Radius = 5
//// Using non-static methods that require an instance
//console.log(`Area of the circle (instance): ${myCircle.area()}`);  // Uses 'this.radius' in the instance
//console.log(`Circumference of the circle (instance): ${myCircle.circumference()}`);
//// Using static methods that do not require an instance
//console.log(`Area of the circle (static): ${Mathematics.areaCircle(5)}`);
//console.log(`Circumference of the circle (static): ${Mathematics.circumferenceCircle(5)}`);

// Getters y Setters:
class Product {
  private _price: number;

  constructor(private name: string, price: number) {
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value >= 0) {
      this._price = value;
    } else {
      throw new Error("Price must be non-negative");
    }
  }
}

//const item = new Product("Laptop", 1500);
//console.log(item.price);
//item.price = 1800;
//// item.price = -5; // throws error


// Decorators: https://www.typescriptlang.org/docs/handbook/decorators.html

// Generic Classes:
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Hello

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // 42







