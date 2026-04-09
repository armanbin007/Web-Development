function loadScript(src){
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve('Script loaded successfully');
        script.onerror = () => reject(new Error('Failed to load script'));

        document.body.appendChild(script);
    });
}
async function run(src){
    try{ 
        let msg = await loadScript(src);
        alert(msg);
    }catch(err){
        alert(err.message);
    }
} run("https://cdnjs.cloudflarecom/ajax/libs/prism/9000.0.1/prism.min.js");