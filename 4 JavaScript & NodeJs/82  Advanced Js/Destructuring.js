function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main(){
    let [x, y, ...rest] = [1, 5, 7, 8, 9, 10, 11] // rest is an array that contains the remaining elements after x and y are assigned
    console.log(x, y, rest);
})()

let obj = {
    a: 60, b: 98, c: 10
}
let {a,b} = obj; // used to pull out just needed properties
console.log(a, b);

// ... is a spread operator to open up an array

function sum(a, b, c){
    return a + b + c;
}
let arr = [1, 5, 6];
console.log(sum(...arr)); // sum(...arr) = sum(arr[0], arr[1], arr[2]) = sum(1, 5, 6) = 12

console.log({...arr}); // index:value

// let & const doesn't work in hoisting
// var works for hoisting

