
//Hoisting is a JavaScript behavior where variable and function declarations
//are moved to the top of their scope during the memory creation phase, before the code is executed.

// anything outside function are called global space - ex..this & window
//anything inside the function are called local space

//undefined & not defined
//undefined - variable first undefined in memory creation phase ,placeholder for future variable value

var num;
console.log(num); // undefined
// console.log(notNum); // not defined

// Null means a variable is explicitly set to have no value.

var nullVar = null;
console.log("nullVar output:", nullVar); // null

// Window Object & This
// The shortest JavaScript program is an empty program, but the JS engine still works.
// The global object in browsers is the window object.

// console.log("window output:", window); // Window object
console.log("this output:", this); // Window object

// Closure
// A closure is a function bundled with its lexical scope.

function closureExample() {
    var closureVar = "I am a closure!";
    return function () {
        console.log("closureExample output:", closureVar);
    };
}
var myClosure = closureExample();
myClosure(); // "I am a closure!"


//not defined - we access variable but this is not exists in code so give reference error 
// we can't use var a = undefined 

//scop- Scope means where you can access variable and function in our code 
//Scope Chain is the process JavaScript uses to find a variable.
//global scop - Variables declared outside any function
let x = 10;

function show() {
    console.log(x);
}

show(); // 10

//functional scop - Variables declared inside a function
function test() {
    let y = 5;
    console.log(y);
}

test();     // 5
// console.log(y); // ❌ Error

//block scop - Variables declared inside { }
{
    let a = 10;
    console.log(a); // 10
}
// console.log(a); // ❌ Error

//lexical environment - is a place where JavaScript stores variables and functions for a particular scope.
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        //b= 22;
        console.log(a, b, c);
    }

    inner();
}

outer();

// Higher-Order Functions (HOC)
// A function that takes another function as an argument or returns a function.

function higherOrder(callback) {
    return function () {
        callback();
    };
}
var hoc = higherOrder(function () {
    console.log("higherOrderEx output:", "I am a higher-order function.");
});
hoc();

// Promises
// Promises are used to handle asynchronous operations.

var promise = new Promise(function (resolve, reject) {
    // Asynchronous operation
    if (true) {
        resolve("Operation successful.");
    } else {
        reject("Operation failed.");
    }
});
promise
    .then(function (result) {
        console.log("promise then output:", result); // "Operation successful."
    })
    .catch(function (error) {
        console.log("promise catch output:", error);
    });

// Async/Await
// Async functions return a promise, and await is used to wait for the promise to resolve.

async function asyncExample() {
    try {
        var result = await promise;
        console.log("asyncExample output:", result); // "Operation successful."
    } catch (error) {
        console.log("asyncExample catch output:", error);
    }
}
asyncExample();

// Object-Oriented Programming (OOP) in JavaScript

// Constructor Function
function BankAccount(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
}

// Prototype
BankAccount.prototype.getDetails = function () {
    return `${this.accountHolder} - ${this.accountNumber}`;
};

// Classes
class BankAccountClass {
    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
    }

    getDetails() {
        return `${this.accountHolder} - ${this.accountNumber}`;
    }
}

// Inheritance
class SavingsAccount extends BankAccountClass {
    constructor(accountNumber, accountHolder, interestRate) {
        super(accountNumber, accountHolder);
        this.interestRate = interestRate;
    }

    getInterestRate() {
        return this.interestRate;
    }
}