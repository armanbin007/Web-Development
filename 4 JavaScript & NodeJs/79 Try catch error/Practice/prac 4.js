function delay(time, name){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(name + " done");
            resolve(name);
        }, time);
    })
}

// Parallel
async function prun(){
    let result = await Promise.all([
    delay(2000, "task 1"),
    delay(2000, "task 2"),
    delay(2000, "task 3")
]);
console.log(result);

}

prun();

// Sequential
// let a = await delay(2000, "task 1");
// let b = await delay(2000, "task 2");
// let c = await delay(2000, "task 3");

// console.log(a, b, c);