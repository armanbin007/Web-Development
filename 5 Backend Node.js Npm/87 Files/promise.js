import fs from "fs/promises"
// let a = await fs.readFile("harry2.txt")
// let b = await fs.appendFile("harry.txt", "\nEhh bikhariii\nEhhhhhh")
// let x = await fs.readFile("harry.txt")
// console.log(a.toString());
// console.log(x.toString());

import path from "path"

let mPath = "c:\\Users\\email\Desktop\\Web-Development\\5 Backend Node.js Npm\\87 Files\\promise.js"

console.log(path.extname(mPath));
console.log(path.basename(mPath));
