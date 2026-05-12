const { error } = require("console");
const fs = require("fs")

console.log(fs);
console.log("Starting")
// fs.writeFileSync("harry.txt", "I have learned coding from harry")

fs.writeFile("harry2.txt", "Hiiiiiiii", ()=>{
    console.log("Done!!!");
    fs.readFile("harry.txt", (error, data)=>{
        console.log(data.toString());
    })
})
console.log("Endling")