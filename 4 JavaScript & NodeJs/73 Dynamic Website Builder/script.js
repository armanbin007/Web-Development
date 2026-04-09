function createCard(title, cName, views, months, duration, thumbnail){
    let viewStr;
    if(views < 1000000){
        viewStr = views/1000 + "K views";
    } 
    else if(views >= 1000000){
        viewStr = views/1000000 + "M views";
    }
    else{
        viewStr = views/1000 + "K views";
    }
    let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}">
                <div class = "capsule">
                ${duration}
                </div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewStr} . ${months} </p>
            </div>
        </div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", "CodeWithHarry", 5000000, "2 months ago", "1:00:00", "source.png");