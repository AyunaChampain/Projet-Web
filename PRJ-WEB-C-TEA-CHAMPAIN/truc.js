window.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("myImage");

  let x = 100;
  let y = 100;
  let targetX = x;
  let targetY = y;
  const step = 100;

  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  img.style.position = "absolute";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.transition = "top 0.5s ease, left 0.5s ease";
  img.style.cursor = "grab";

  function getRandomPosition() {
    if (isDragging) return;

    const direction = Math.floor(Math.random() * 4);
    switch (direction) {
      case 0: targetY = Math.max(0, targetY - step); break;
      case 1: targetY = Math.min(window.innerHeight - img.height, targetY + step); break;
      case 2: targetX = Math.max(0, targetX - step); break;
      case 3: targetX = Math.min(window.innerWidth - img.width, targetX + step); break;
    }
  }

  function animate() {
    if (!isDragging) {
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;

      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
    }

    requestAnimationFrame(animate);
  }

  // SOURIS : drag
  img.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragOffsetX = e.clientX - img.offsetLeft;
    dragOffsetY = e.clientY - img.offsetTop;
    img.style.cursor = "grabbing";
    img.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    x = e.clientX - dragOffsetX;
    y = e.clientY - dragOffsetY;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      targetX = x;
      targetY = y;
      img.style.cursor = "grab";
      img.style.transition = "top 0.5s ease, left 0.5s ease";
    }
  });

  // MOBILE : touch
  img.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    dragOffsetX = touch.clientX - img.offsetLeft;
    dragOffsetY = touch.clientY - img.offsetTop;
    img.style.transition = "none";
  });

window.addEventListener("touchmove", (e) => {
  if (isDragging) {
    e.preventDefault(); // Empêche le scroll
    const touch = e.touches[0];
    x = touch.clientX - dragOffsetX;
    y = touch.clientY - dragOffsetY;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  }
}, { passive: false }); 


  window.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false;
      targetX = x;
      targetY = y;
      img.style.transition = "top 0.5s ease, left 0.5s ease";
    }
  });

  setInterval(getRandomPosition, 1000);
  animate();
});
