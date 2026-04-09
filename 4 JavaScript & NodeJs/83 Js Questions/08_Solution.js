// 8. Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function Arr(arr){
    return arr.map(e =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(e*2)
            }, 4000);
        })
    })
}

let arr = [10, 20, 30, 40]

async function run(array){
    let res = await Arr(array);
    let newArr = await Promise.all(res);
    console.log(newArr);
}

run(arr);