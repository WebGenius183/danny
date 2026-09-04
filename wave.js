(function () {
  const canvas = document.getElementById('wave-canvas');
  const ctx = canvas.getContext('2d');
  let width, height, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  let t = 0;
  const baseY = () => height * 0.55;

  function drawWave() {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, baseY());

    const amp = height * 0.08;
    const step = 6;

    for (let x = 0; x <= width; x += step) {
      const y =
        baseY() +
        Math.sin(x * 0.006 + t) * amp +
        Math.sin(x * 0.015 - t * 1.4) * amp * 0.4;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, baseY() - amp, 0, height);
    gradient.addColorStop(0, 'rgba(255, 30, 30, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fill();

    t += 0.02;
    requestAnimationFrame(drawWave);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    drawWave();
  }
})();

new Typed('#typewriter', {
  strings: ['The final touch that makes your <span class="highlight">music</span> ready.',
    'We transform raw recordings into balanced, dynamic, and immersive mixes'
  ],
  typeSpeed: 50,
  backDelay: 4000,
  loop: true,
  contentType: 'html'
});