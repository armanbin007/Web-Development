import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\email\\Desktop\\Web-Development\\5 Backend Node.js Npm\\94 Solution of exersice 15"

let files = await fs.readdir
(basepath)


for (const i of files) {
    let ex = i.split(".")[i.split(".").length - 1]
    let folderPath = path.join(basepath, ex)
    console.log("Running for ", i)
    // console.log(ex);
    if(ex != "js" && ex != "json" && i.split(".").length > 1){
        if(fsn.existsSync(folderPath)){
            // Moving file to dir
            await fs.rename(path.join(basepath, i), path.join(basepath, ex, i))
        } else{
            fs.mkdir(folderPath)
            await fs.rename(path.join(basepath, i), path.join(basepath, ex, i))
        }
        // console.log(i);
    }
}

