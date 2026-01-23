// closure 
function counter(){
    let count = 1;
    return function counterPlus(){
        return count++;
    }
}
const total = counter();

console.log(total());
console.log(total());
console.log(total());
console.log(total());