let x = [1, 5, 10]

for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

x.forEach((value, i, arr)=>{
    console.log(i, value, arr)
})

let obj = {
    a: 1, b: 2, c: 3
} 
for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)){
        const element = obj[key];
        console.log(key, element)
    }
}

for (const element of x) {
    console.log(element)
}

