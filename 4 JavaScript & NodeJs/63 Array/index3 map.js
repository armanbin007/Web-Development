// map for performing operation on array element
// let x = [1, 5, 10, 20]
// // let y =[]
// // for(let i = 0; i < x.length; i++){
// //     const element = x[i];
// //     y.push(element**2)
// // } 
// let y = x.map((e)=>{ // important
//     return e**2
// })
// console.log(y)

// // Filter
// const greaterThanSeven = (e)=>{ // (e) => means for each element in the array perform this operation
//     if(e>7){
//         return true
//     } return false
// }
// console.log(x.filter(greaterThanSeven))

let xyz = [1, 2, 3, 4, 5]

const mul = (a, b) =>{ // mul is a function that takes two arguments a and b and returns the product of a and b
    return a*b
}
console.log(xyz.reduce(mul))

