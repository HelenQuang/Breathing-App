const btn = document.getElementById("play-button");
const audio = document.getElementById("audio");
const containerEl = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 10000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = () => {
  text.innerText = "Breath In...";
  containerEl.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold...";

    setTimeout(() => {
      text.innerText = "Breath Out...";
      containerEl.className = "container shrink";
    }, holdTime);
  }, breathTime);
};
breathAnimation();

setInterval(breathAnimation, totalTime);

btn.addEventListener("click", () => {
  if (!btn.classList.contains("play")) {
    btn.classList.add("play");
    audio.play();
  } else {
    btn.classList.remove("play");
    audio.pause();
  }
});
