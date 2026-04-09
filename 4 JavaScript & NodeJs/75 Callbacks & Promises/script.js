// Asyncronas
console.log("Hello World");

setTimeout(() => {
    console.log("This is a setTimeout function");
}, 3000); // first line is executed then after 3 seconds this function is executed

console.log("This is me Arman and explaining you about Asyncronas in JavaScript");

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Xcode");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback); 
