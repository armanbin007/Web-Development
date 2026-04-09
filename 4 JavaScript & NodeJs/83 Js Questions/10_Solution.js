// 10. The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function Delay(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fun(type){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(type + " Coffee is ready")
        }, Delay(1000, 10000));
    })
} async function brewCoffee(type){
    let x = await fun(type);
    console.log(x);
}

brewCoffee("Latte");