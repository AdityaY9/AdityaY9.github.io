

import confetti from "canvas-confetti";

function renderConfetti(event) {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;

  }

  const buttonRect = event.target.getBoundingClientRect();
  const buttonX = (buttonRect.left + buttonRect.right) / 2 / window.innerWidth;
  const buttonY = (buttonRect.top + buttonRect.bottom) / 2 / window.innerHeight;

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 200 * (timeLeft / duration);
    const heartParticleCount = Math.floor(particleCount * 0.5); // Adjust ratio as desired

    // Generate regular confetti particles
    confetti(
      Object.assign({}, defaults, {
        particleCount: particleCount - heartParticleCount,
        origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.1, 0.5) }, // Random origin within canvas
      })
    );

    // Generate heart-shaped confetti particles
    for (let i = 0; i < heartParticleCount; i++) {
      const x = buttonX + randomInRange(-0.1, 0.1);
      const y = buttonY + randomInRange(-0.1, 0.1);
      const size = randomInRange(0.4, 0.7);
      
      confetti({
        particleCount: 1,
        angle: 60,
        spread: 55,
        origin: { x, y },
        colors: ['#ff0000'],
        shapes: ['heart'],
        scalar: size
      });
    }
  }, 250);
}

export { renderConfetti };
