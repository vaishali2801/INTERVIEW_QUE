//ES5 
//var -var is an old way to declare variables in JavaScript.
//functional scop
//can be redeclared , reassigned
//hoisting (initialized by undefined)
var a = 10;
var a = 20;   // allowed
a = 30;       // allowed
console.log(a); // 30

if (true) {
    var x = 15; 
    console.log(x);
}
//ES6
//let -let is a modern way to declare variables.
//block scop
//can be reassigned but not redeclared in same scop
//Hoisted but in Temporal Dead Zone

let b = 10;
// let b = 20; // ❌ Error
b = 30;       // allowed
console.log(b); // 30

//const - const is used for fixed values that should not change.
//it can't be redeclared or reassigned 
//Hoisted but in Temporal Dead Zone
//Must be initialized at declaration

const c = 10;
// c = 20;     // ❌ Error
console.log(c); // 10
