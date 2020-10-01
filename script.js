const video = document.getElementById("video");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const progress = document.getElementById("progress");
const time = document.getElementById("timestamp");


// Functions
// Play and Pause video
function toggleVideoStatus() {
  if (video.paused) {
video.play();
  } else {
video.pause();
  }
};

// Update Play/Pause icon
function updatePlayIcon() {
  if (video.paused) {
    playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

// Update Progress bar and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins = "0" + String(mins);
  }
// Get seconds
  let sec = Math.floor(video.currentTime % 60);
  if(sec < 10) {
    sec = "0" + String(sec);
  }

  timestamp.innerHTML = `${mins }:${sec}`;
};

// Set video time to progress
function setVideoProgress() {
  video.currentTime  = (+progress.value * video.duration) / 100;
};

// Stop playing video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
};


// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playButton.addEventListener("click", toggleVideoStatus);

stopButton.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);