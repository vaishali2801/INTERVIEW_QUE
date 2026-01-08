//TDZ - Temporal Dead Zone (TDZ) is the time between variable declaration
// and initialization where a variable declared with let or const cannot be accessed.

console.log(a); // ❌ Error
let a = 10;

//ReferenceError: Cannot access 'a' before initialization
//To avoid bugs
// To force safe variable usage
// To make code more predictable