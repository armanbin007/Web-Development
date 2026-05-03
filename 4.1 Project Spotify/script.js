console.log('Hiiii');
let songs;
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

let currentSong = new Audio();
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

const playMusic = (track, pause = false)=>{
    currentSong.src = "/songs/" + track
    if(!pause){
        currentSong.play()
        play.src = "pause.svg"
    }
        cleanName = decodeURIComponent(track)
        .replaceAll("\\", "")
        .replaceAll("%20", " ")
        .replaceAll(".mp3", "")

    document.querySelector(".songInfo").innerHTML = cleanName
    document.querySelector(".songTime").innerHTML = "00.00/00.00"
}

async function main(){
    songs = await getSongs();
    console.log(songs);
    playMusic(songs[0], true)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    let cleanName;
    for (const s of songs){
        cleanName = decodeURIComponent(s)
        .replaceAll("\\", "")
        .replaceAll("%20", " ")
        // .replaceAll(".mp3", "")
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
    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click", element=>{
        console.log(e.querySelector(".info").firstElementChild.innerHTML);
        playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
}

    // Attach an event listener to prev,play,next
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "pause.svg"
        } else{
            currentSong.pause()
            play.src = "play.svg"
        }
    })
    prev.addEventListener("click", ()=>{
        console.log('Prev Clicked');
        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        console.log(songs, index);
        if((index - 1) >= 0){
            playMusic(songs[index-1])
        }
        
    })
    next.addEventListener("click", ()=>{
        console.log('Next Clicked');
        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        console.log(songs, index);
        if((index + 1) < songs.length){
            playMusic(songs[index+1])
        }
    })

    // Timeupdate event
    currentSong.addEventListener("timeupdate", ()=>{
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        let percent = e.offsetX/e.target.getBoundingClientRect().width * 100;

        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    })

    //Event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0%";
    })
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-100%";
    })

main();

