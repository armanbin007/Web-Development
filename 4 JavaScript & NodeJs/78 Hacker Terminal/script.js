const texts = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const terminal = document.getElementById("terminal");

function getRandomDelay(){
    return Math.floor(Math.random() * 6000) + 1000;
}
 function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runhack(){
    for(let msg of texts){
        let div = document.createElement("div");
        div.classList.add("line");
        div.innerText = msg;
        terminal.appendChild(div);
        let x = getRandomDelay();
        console.log(`The delay is: ${x}`);
        await delay(x);
    }    
}

runhack();