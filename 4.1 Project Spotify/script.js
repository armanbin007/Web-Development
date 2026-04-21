console.log('Hiiii');


async function getSongs(){
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("songs")[1]);
        }
    } return songs;
}
async function main(){
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    let cleanName;
    for (const s of songs){
        cleanName = decodeURIComponent(s)
        .replaceAll("\\", "")
        .replaceAll("%20", " ")
        .replaceAll(".mp3", "")
        songUL.innerHTML += `<li>
                            <img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${cleanName}</div>
                                <div>Studioz</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>
                        </li>`;
    }

    var audio = new Audio(songs[0]);
    // audio.play();
    audio.addEventListener("loadeddata", ()=>{
        console.log(audio.duration, audio.currentSrc, audio.currentTime);        
    });
}

main();

