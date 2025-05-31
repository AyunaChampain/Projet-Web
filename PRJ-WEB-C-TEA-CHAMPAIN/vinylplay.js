window.addEventListener("load", function () {

  const vinyl = document.getElementById("vinyl");
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("vinylAudio");

  let isPlaying = false;

  playButton.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      vinyl.classList.add("spin");
      playButton.textContent = "⏸️";
    } else {
      audio.pause();
      vinyl.classList.remove("spin");
      playButton.textContent = "▶️";
    }
    isPlaying = !isPlaying;
  });
});

