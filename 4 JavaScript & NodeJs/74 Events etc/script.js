let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Hello World</b>"
// })
// button.addEventListener("contextmenu", ()=>{ // right click
//     document.querySelector(".box").innerHTML = "<b>Hello World</b>"
// })

document.addEventListener("keydown", (e)=>{
    console.log(e.key , e.keyCode)
    document.querySelector(".box").innerHTML = "<b>Hello World</b>"
})