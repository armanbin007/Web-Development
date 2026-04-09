// 5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(arr){
    let result = 0;
    for (const element of arr){        
        if(element < 0){
            return result;
        } else{
            result += element;
        }
    } return result;
}
let arr = [5, 10, 2, 50, -5, 10]
let x = sum(arr);
console.log(x);
