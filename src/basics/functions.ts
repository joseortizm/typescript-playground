// Basic function
function printMessage(message: string) : void{
  console.log(message);
}

//printMessage("Hello Typescript");

// Call functions
// TypeScript has many ways to describe how functions can be called
function greeter_1(fn: (a: string) => void) {
  fn("Hello World 1");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
//greeter_1(printToConsole);

// we can use a type alias to name a function type
type GreeterFunction = (message: string) => void;

function greeter_2(fn: GreeterFunction) {
  fn("Hello World 2");
}

//greeter_2(printToConsole);

function add(x: number, y: number): number {
  return x + y;
}

const add2 = (x: number, y: number): number => x + y;

let n:number = add(4,5)


