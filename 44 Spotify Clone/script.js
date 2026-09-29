async function getSongs() {
    let song = await fetch("http://127.0.0.1:5500/44%20Spotify%20Clone/Songs");
    let response = await song.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    // console.log(as);

    let songs = [];

    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            // songs.push(element.href);
            songs.push(element.href.split("/Songs/")[1]);
            // By split /Songs mean that return the title after the word Song. Not the full path
            // http://127.0.0.1:5500/44%20Spotify%20Clone/Songs/Faslon%20ko%20Takalluf.mp3
            // Faslon%20ko%20Takalluf.mp3 (Because of split)

            
        }
    }

    return songs;
}

async function playSongs() {
    // Get the songs from the server
    let songs = await getSongs();
    console.log(songs);

    // Adding songs to the library list
    let songUl = document.querySelector(".song_list").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML += `<li>${song.replaceAll("%20", " ")}</li>`;
        // %20 is the blank space in the song title and we don't want it
    }




    // Plying the songs

    let audio = new Audio(songs[3]);
    // audio.play();

    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(audio.duration, audio.currentSrc, audio.currentTime);
        console.log("Duration of the audio clip:", duration, "seconds");
        // The duration variable now holds the duration (in seconds) of the audio clip
    });

}

playSongs();
