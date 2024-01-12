console.log("Lets right java script");
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
  currFolder = folder;
  let a = await fetch(`http://127.0.0.1:5500/Spotify/songs/${currFolder}/`);
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`${folder}/`)[1]);
    }
  }
  let songUl = document
    .querySelector(".song-list")
    .getElementsByTagName("ul")[0];
  songUl.innerHTML = "";
  for (const song of songs) {
    songUl.innerHTML =
      songUl.innerHTML +
      `<li>
  
  <img class="music1" src="music.svg" alt="" />
  <div class="info">
    <div>${song.replaceAll("http://127.0.0.1:5500/Spotify/songs/,", " ")}</div>
    <div>Sahil</div>
  </div>
  <div class="play-now">
    <span>Play Now</span>
    <img class="invert play-now-button" src="play_now.svg" alt="" />
  </div>
      
  </li>`;
  }
  Array.from(
    document.querySelector(".song-list").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      //   console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(
        e.querySelector(".info").firstElementChild.innerHTML.trimStart()
      );
    });
  });
}
const playMusic = (track, pause = false) => {
  // let audio = new Audio("/Spotify/songs/"+track)
  currentSong.src = `/Spotify/songs/${currFolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "pause.svg";
  }
  document.querySelector(".song-info").innerHTML = decodeURI(track);
  document.querySelector(".song-time").innerHTML = "00:00/00:00";
};
async function main() {
  await getSongs("cs");
  playMusic(songs[0], true);

  
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
    }
  });
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".song-time").innerHTML = `${secondsToMinutesSeconds(
      currentSong.currentTime
    )} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });
  document.querySelector(".seek-bar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });
  previous.addEventListener("click", () => {
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    console.log(songs, index);
    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });
  next.addEventListener("click", () => {
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    console.log(songs, index);
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      console.log("Setting Volume to", e.target.value, "/100");
      currentSong.volume = parseInt(e.target.value) / 100;
    });
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => {
      // console.log(item.target,item.currentTarget.dataset)
      songs = await getSongs(`${item.currentTarget.dataset.folder}`);
    });
  });
  //   var audio = new Audio(songs[0]);
  //   audio.play();
  //   audio.addEventListener("ontimeupdate", () => {
  //     console.log(audio.duration, audio.currentSrc, audio.currentTime);
  //   });
}
main();
