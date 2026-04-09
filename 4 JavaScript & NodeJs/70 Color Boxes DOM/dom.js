function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Select all boxes
let boxes = document.querySelectorAll(".box");

// Loop through each box
boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();
    box.style.color = getRandomColor();
});