let arr = [199, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr.shift()); // shift removes the first element of the array and returns it
console.log(arr);
console.log(arr.unshift(10)); // unshift adds in front
console.log(arr);
delete arr[4];
console.log(arr);
a = [39, 90, 1, 35, 55];

console.log(arr.concat(a)); //returns a new array doesn't change

console.log(a.sort())
console.log(a.splice(1,3,5, 7, 10))
console.log(a)