function delay(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Successful")
        }, n);
    })
}

(async function run(){
    let a1 = await delay(2000);
    console.log(a1);
    let a2 = await delay(5000);
    console.log(a2);
    let a3 = await delay(1000);
    console.log(a3);
})()