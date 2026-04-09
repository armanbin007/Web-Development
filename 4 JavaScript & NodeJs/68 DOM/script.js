console.log("Hi")
let boxes = document.getElementsByClassName("box")
// boxes[0].style.backgroundColor = "lightblue"

document.getElementById("3").style.backgroundColor = "lightgreen"

document.querySelector(".box").style.backgroundColor = "lightpink"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "teal"
})

