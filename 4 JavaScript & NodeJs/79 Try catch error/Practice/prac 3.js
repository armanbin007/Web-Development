let x = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Rejected");
    },3000);
});

async function runX(){
    try{
        let result = await x;
        console.log(result);
    } catch(err){
        console.log(err);
    }
}
runX();