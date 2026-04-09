// 2. The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let array = [1, 2, 4, 5, 2, 10]

function doubleElement(array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if(i > 0 && array[i] === array[i-1]){
            result.push(array[i]);
        } else{
            result.push(array[i] * 2);
        }        
    } return result;
}

let x = doubleElement(array);
console.log(x);

