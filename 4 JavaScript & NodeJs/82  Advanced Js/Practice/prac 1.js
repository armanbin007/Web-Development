function delay(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Succesful")
        }, 2000);
    })
}

let texts = [
    "Hello", "World"
]
async function print(x){
    for(let text of x){
        await delay();
        console.log(text);
    }
}

print(texts);