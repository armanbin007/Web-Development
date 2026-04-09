function saveNoteToLocalStorage(note){
    localStorage.setItem("note", note);
}

let note = localStorage.getItem("note")
if(note){
    document.querySelector(".note").innerHTML = note;
}
document.querySelector("button").addEventListener("click", ()=>{
    let note = prompt("Enter you note")
    saveNoteToLocalStorage(note)
    document.querySelector(".note").innerHTML = note;
})

let x = {"harry": 1, "rohan": 20};
localStorage.setItem("guys", JSON.stringify(x)) // converting to a string
JSON.parse(localStorage.getItem("guys")) // to parse to obj