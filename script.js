function startSurprise() {
  playMusic();       // 🔊 Start the music
  launchConfetti();  // 🎉 Launch confetti
}

// Separate confetti logic
function launchConfetti() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      particleCount: 50,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2
      },
      ...defaults
    });
  }, 250);
}

// Music play logic
function playMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  }
}

// Load confetti library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
document.head.appendChild(script);