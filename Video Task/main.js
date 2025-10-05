let buttons = document.querySelectorAll(".videos input");
let video = document.querySelector("video");

let videosSrc = [
  "./images/1 MINUTE NATURE BREAK 4K.mp4",
  "./images/universe.mp4",
  "./images/1 MINUTE NATURE BREAK 4K.mp4",
  "./images/universe.mp4",
  "./images/1 MINUTE NATURE BREAK 4K.mp4",
  "./images/universe.mp4",
  "./images/1 MINUTE NATURE BREAK 4K.mp4",
];

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    video.src = videosSrc[index];
    video.play();
  });
});

video.addEventListener("dblclick", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else {
    console.log("error");
  }
});
