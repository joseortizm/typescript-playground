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

function add_1(x: number, y: number): number {
  return x + y;
}

const add_2 = (x: number, y: number): number => x + y;

//let n1:number = add_1(4,5)
//let n2:number = add_2(4,5)
//console.log("n1:", n1);
//console.log("n2:", n2);

// union types in parameters
function countChars(message: string | number): void {
  console.log(message.toString().length);
}

//countChars(10000);
//countChars("hi5");

// array as parameter
const squares = (array: number[]) => array.map((x) => x * x);

//const resultSquares = squares([10, 3, 4]);
//console.log(resultSquares);

// optional parameter
// when is not parameter, ts assign null value to it
function addThree(x: number, y: number, z?: number): number {
  if (z !== undefined) {
    return x + y + z;
  }
  return x + y;
}

//const addT = addThree(5, 4);
//console.log("addT:", addT);

// default parameter
function helloDefault(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

//const msg = helloDefault("Jose");
//console.log("msg:", msg);

// writing Good Overloads https://www.typescriptlang.org/docs/handbook/2/functions.html 
function add_r(a:string, b:string):string;
function add_r(a:number, b:number): number;
function add_r(a: any, b:any): any {
    return a + b;
}

//const add_msg = add_r("Hello ", "Steve"); // returns "Hello Steve" 
//add_r(10, 20); // returns 30

// to operate unlimited parameters
function showNames(...names: string[]) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
//showNames("Arena");
//showNames("Maria", "Jose", "Judit");

// a rest parameter can only be the final param in a function
function addMultiples(arg1: string, ...args: string[]): string;
function addMultiples(arg1: number, ...args: number[]): number;
function addMultiples(arg1: any, ...args: any[]): any {
  var total = arg1;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

//console.log(10);
//console.log(addMultiples(1, 2, 3, 4, 5));
//console.log(addMultiples(10, 20, 30, 40, 50));
//console.log(addMultiples("Maria", "Jose", "Judit", "Arena"));



