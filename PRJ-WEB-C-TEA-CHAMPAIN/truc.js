window.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("myImage");

  let x = 100;
  let y = 100;
  let targetX = x;
  let targetY = y;
  const step = 100; // amplitude du déplacement aléatoire

  // Appliquer une transition CSS pour la fluidité
  img.style.position = "absolute";
  img.style.transition = "top 0.5s ease, left 0.5s ease";

  function getRandomPosition() {
    const direction = Math.floor(Math.random() * 4);
    switch (direction) {
      case 0: targetY = Math.max(0, targetY - step); break; // Haut
      case 1: targetY = Math.min(window.innerHeight - img.height, targetY + step); break; // Bas
      case 2: targetX = Math.max(0, targetX - step); break; // Gauche
      case 3: targetX = Math.min(window.innerWidth - img.width, targetX + step); break; // Droite
    }
  }

  function animate() {
    x += (targetX - x) * 0.1;
    y += (targetY - y) * 0.1;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    requestAnimationFrame(animate);
  }

  setInterval(getRandomPosition, 1000); // Change de direction chaque seconde
  animate(); // Lancer l'animation
});
