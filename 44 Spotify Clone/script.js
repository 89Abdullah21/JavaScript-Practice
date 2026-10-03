// Below Steps:
// 1) First we create a function to getSongs from the source
// 2) In the function body, we fetch the songs from the target directory
// 3) The response is converted to text.
// 4) We create a temporary div element to hold the response HTML.
// 5) Using innerHTML, we add the response to the div.
// 6) The song links are in the anchor tags (found by checking the console), so we get all the anchor tags from the div.
// 7) We create an empty array to hold the song links.
// 8) To add songs to the array, we create a loop
// 9) In the loop, we check if the href of the anchor tag ends with ".mp3" to filter out non-song links.
// 10) If the href ends with ".mp3", we push the song link to the songs array. We use split to get only the song title after "/Songs/"
// 11) Finally, we return the songs array
// 12) Next, we create a function to playSongs
// 13) In the function body, we call getSongs to get the songs from the server
// 14) We log the songs to the console for debugging purposes
// 15) Now in order to display the songs in our desired area/din in the site, we select the unordered list element in the song_list div to add the songs to the library list
// 16) We create a loop to iterate through the songs array and add each song to the unordered list as a list item. We replace "%20" with a blank space in the song title for better readability.
// 17) Next, we create an audio object and set its source to the fourth song in the songs array (index 3). We then call the play method on the audio object to start playing the song.
// 18) We add an event listener to the audio object that listens for the "loadeddata" event. When this event is triggered, we log the duration of the audio clip, the current source, and the current time to the console for debugging purposes. We also log a message indicating the duration of the audio clip in seconds.


let currentTrack = new Audio(); // Create a new Audio object to hold the current track
// Without this, the audio started will play forever and multiple songs will play at the same time. So we need to create a new audio object to hold the current track and stop it when a new song is played.


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
            songs.push(element.href);
            // songs.push(element.href.split("/Songs/")[1]);
            // By split /Songs mean that return the title after the word Song. Not the full path
            // http://127.0.0.1:5500/44%20Spotify%20Clone/Songs/Faslon%20ko%20Takalluf.mp3
            // Faslon%20ko%20Takalluf.mp3 (Because of split)


        }
    }

    return songs;
}

// =============Above function is just to get songs from server ========

async function playSongs() {
    // Get the songs from the server
    let songs = await getSongs();
    // console.log(songs);

    
    // Adding songs to the library list
    let songUl = document.querySelector(".song_list").getElementsByTagName("ul")[0]
    // console.log(songUl);
    for (const song of songs) {
        let songTitle = song.split("/Songs/")[1].split(".mp3")[0];
        // songUl.innerHTML += `<li>${songTitle.replaceAll("%20", " ")}</li>`;  (Before: Just to print the song title in the list)
        songUl.innerHTML += `<li>
                                <div class="song_box">


                                    <div class="song_info">
                                        <img src="/44 Spotify Clone/Svgs/music.svg" alt="">
                                        <div class="library_song_text">
                                            <h5>${songTitle.replaceAll("%20", " ")}</h5>
                                            <p>Abdullah</p>

                                        </div>
                                    </div>

                                        <div class="play_song">
                                            <span>Play Song</span>
                                            <img src="/44 Spotify Clone/Svgs/play.svg" alt="">
                                        </div>
                                    
                                </div>
                            </li>`;
        // %20 is the blank space in the song title and we don't want it
    }




    // // Plying the songs

    // let audio = new Audio(songs[0]);
    // // audio.play();

    // audio.addEventListener("loadeddata", () => {
    //     let duration = audio.duration;
    //     console.log(audio.duration, audio.currentSrc, audio.currentTime);
    //     console.log("Duration of the audio clip:", duration, "seconds");
    //     // The duration variable now holds the duration (in seconds) of the audio clip
    // });

    // Above was the practice code to play the song and get the duration of the song. Now we will implement the play button functionality below.

    // Attching eventlistenre to each song. 
    // Song will play on click

    // Array.from(document.querySelector(".song_list").getElementsByTagName("li")).forEach(songli =>{
    //     console.log(songli);
    // })

    const playMusic = (songTitle) => {
        // audio = new Audio("/44 Spotify Clone/Songs/" + songTitle + ".mp3");
        // audio.play();
        
        // To play audio
        currentTrack.src = "/44 Spotify Clone/Songs/" + songTitle + ".mp3";
        currentTrack.play();

        // To change the play button to pause button when the song is playing
        play.src = "/44 Spotify Clone/Svgs/pause.svg";

        // To change the song title in the playbar when the song is playing
        let playbar_song_info=document.querySelector(".playbar_song_info");
        playbar_song_info.innerHTML = `<p>${songTitle}</p>`;

        // To display live song time
        let songtime = document.querySelector(".songtime");
        // console.log(currentTrack);
        
        currentTrack.addEventListener("timeupdate", () => {
            let currentTime = currentTrack.currentTime;
            let minutes = Math.floor(currentTime / 60);
            let seconds = Math.floor(currentTime % 60);
            // songtime.innerHTML = `<p>${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;
            if(seconds < 10){
                seconds = '0' + seconds;
            }

            let durationMinutes = Math.floor(currentTrack.duration / 60);
            let durationSeconds = Math.floor(currentTrack.duration % 60);
            if(durationSeconds < 10){
                durationSeconds = '0' + durationSeconds;
            }

            songtime.innerHTML = `<p>${minutes}:${seconds}</p>
            <p>/${durationMinutes}:${durationSeconds}</p>`;

            let circle = document.querySelector(".circle");
            circle.style.left = (currentTrack.currentTime / currentTrack.duration) * 100 + "%";


        })
    }

    let songli = document.querySelector(".song_list").getElementsByTagName("li");
    Array.from(songli).forEach(song => {
        // console.log(song);
        song.addEventListener("click", () => {
            // console.log(song.querySelector(".song_info").querySelector("h5").innerText);
            playMusic(song.querySelector(".song_info").querySelector("h5").innerText);


        })
    })

    

    

    // Adding event listener to the play button in the song list to play the song on click
    play.addEventListener("click", () => {
        // let currentTrack = "/44 Spotify Clone/Songs/Faslon";
        
        if(currentTrack.paused){
            currentTrack.play();
            play.src = "/44 Spotify Clone/Svgs/pause.svg";
        } else {
            currentTrack.pause();
            play.src = "/44 Spotify Clone/Svgs/playing.svg";
        }
    })

    previous_track.addEventListener("click", () => {
        
    })


};

playSongs();
