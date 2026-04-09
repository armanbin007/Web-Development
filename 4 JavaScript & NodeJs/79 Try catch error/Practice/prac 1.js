function loadScript(src){
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve('Script loaded successfully');
        script.onerror = () => reject(new Error('Failed to load script'));
        document.body.appendChild(script);
    });
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
.then(msg => alert(msg))
.catch(err => alert(err));