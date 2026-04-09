console.log('This is Promise');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No, random number was not supporting you");
    } else{
        setTimeout(() => {
        console.log('Yes I am done!!!');
        resolve("Done!")
    }, 3000);
    }
})
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No, random number was not supporting you 2");
    } else{
        setTimeout(() => {
        console.log('Yes I am done!!! 2');
        resolve("Done! 2")
    }, 1000);
    }
})

// prom1.then((a)=>{
//     console.log(a);    
// }).catch((e)=>{
//     console.log(e);
// })

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a)=>{
//     console.log(a);    
// }).catch((e)=>{
//     console.log(e);
// }) allSettled, race, any, resolve, reject
let p3 = Promise.any([prom1, prom2]);
p3.then((a)=>{
    console.log(a);    
}).catch((e)=>{
    console.log(e);
})