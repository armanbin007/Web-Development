let x = [10 ,20, 30 ,40]
console.log(...x);

const doc = document.getElementById("result");

function avg(array){
    let n = array.length;
    let sum = [...array].reduce((a, b) => a + b, 0);
    let avg = sum/n;
    console.log(`Average is: ${avg}`);//
    let div = document.createElement("div")
    div.classList.add("line");
    div.innerText = `Average = ${avg}`
    doc.appendChild(div)
} 
avg(x);

