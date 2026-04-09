// 9. The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function RandomDelay(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function msg(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order has been placed successfully")
        }, RandomDelay(1000, 10000));
    })
}

async function placeOrder(){
    let x = await msg();
    console.log(x);
}

placeOrder();

