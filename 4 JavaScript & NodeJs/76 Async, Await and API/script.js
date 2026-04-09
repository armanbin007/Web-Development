//Async function keeps running in the background

// async function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 5000);
//     });
// }
// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.text()
//     console.log(data);
//     return data;
// }

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.text()
    return data;
}
//Settle means the promise is either resolved or rejected, resolve means the promise is successful and reject means the promise is unsuccessful

async function runX(){
    console.log("Fetching data...");
    let data = await getData(); //if we don't wait then the data will be undefined because the promise is not settled yet
    console.log(data);
    console.log("Process finished");
    console.log("Process complete");
}

runX();