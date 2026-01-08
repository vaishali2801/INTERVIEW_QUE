// All JavaScript code executes inside the Global Execution Context (GEC).
//two phase 1. memory creation 
//           2. code execution
// Memory Creation Phase: Variables and functions are allocated memory.
// var variables are initialized with undefined.
// Functions are stored as a whole.

// Execution Phase: Code runs line by line.
// JavaScript is a single-threaded, synchronous language, executing one line at a time.
// The Call Stack handles all the execution of code.

// How the Call Stack Works:
// Every function or code block creates a new execution context added to the Call Stack.
// Once execution is complete, it is popped off from the stack.
//  ______________________________ 
// |   MEMORY    |      CODE      |
// |_____________|________________|
// |             |                |
// | DECLARE VAR | VALUE ASSIGN   |
// |  SAVE FUN   |    FUN SAVE    |
// |   AS IT IS  |                |
// |VAR=UNDEFINED|                |
// |_____________|________________|

//all process managed by call stack
// |              |
// |     FUN2     |
// |              |
// |     FUN1     |
// |              |
// |     GEC      |
// |______________| <- Call stack (LIFO)

console.log(a);
var a = 10;

hello();

function hello() {
    console.log("Hello World");
}
