window.addEventListener("load", function () {
  const bubbles = document.querySelectorAll(".bubble");
  const popSound = new Audio("../audio/pop.mp3.mp3");

  bubbles.forEach((bubble) => {
    bubble.style.position = "absolute";
    bubble.style.width = "60px";
    bubble.style.height = "auto";
    bubble.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    bubble.style.cursor = "pointer";

    // Extraire la position de départ depuis le style
    let x = parseFloat(bubble.style.left) || window.innerWidth - parseFloat(bubble.style.right);
    let y = parseFloat(bubble.style.top) || 100;

    let dx = 2 * (Math.random() < 0.5 ? 1 : -1);
    let dy = 1.5 * (Math.random() < 0.5 ? 1 : -1);
    let popped = false;

    function animate() {
      if (popped) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const bubbleWidth = bubble.offsetWidth;
      const bubbleHeight = bubble.offsetHeight;

      x += dx;
      y += dy;

      if (x + bubbleWidth >= width || x <= 0) dx = -dx;
      if (y + bubbleHeight >= height || y <= 0) dy = -dy;

      bubble.style.left = x + "px";
      bubble.style.top = y + "px";

      requestAnimationFrame(animate);
    }

    animate();

    bubble.addEventListener("click", () => {
      if (popped) return;
      popped = true;

      popSound.cloneNode().play();

      bubble.style.transform = "scale(1.5)";
      bubble.style.opacity = "0";

      setTimeout(() => {
        bubble.remove();
      }, 300);
    });
  });
});
