const reduce = (x)=>{
    return x-1
}
function factorial(x){
    if(x < 0){
        return
    }
    if(x <= 1){
        return 1
    } else{
        return x*factorial(reduce(x))
    }
}
function printFac(x){
    if(x < 0){
        console.log("Factorial is not defined for negative numbers")
        return
    } if(x === 0){
        console.log("0! = 1")
        return
    } if(x === 1){
        console.log("1! = 1")
        return
    }
    sequence = ""
    for(let i = x; i > 0; i--){
        if(i > 1){
        sequence += i + " x "
    } else{
        sequence += i + " = "
    }
    }
    console.log(`${sequence}${factorial(x)}`)
}
let fact = 6
printFac(5)

//New method
function fac(x){
    let arr = Array.from(Array(x+1).keys()) // creates an array of numbers from 1 to x
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b)=>{
        return a*b
    })
    console.log(c)
}

// fac(6)