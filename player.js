document.querySelectorAll('.track').forEach(trackEl => {
    const audio = new Audio(trackEl.dataset.src);
    const playBtn = trackEl.querySelector('.play-btn');
    const iconPlay = trackEl.querySelector('.icon-play');
    const iconPause = trackEl.querySelector('.icon-pause');
    const progressBar = trackEl.querySelector('.progress-bar');
    const progressFill = trackEl.querySelector('.progress-fill');
    const timeLabel = trackEl.querySelector('.track-time');

    function formatTime(sec) {
        if (isNaN(sec)) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    audio.addEventListener('loadedmetadata', () => {
        timeLabel.textContent = formatTime(audio.duration);
    });

    function pauseAllOthers() {
        document.querySelectorAll('.track').forEach(other => {
            if (other !== trackEl) {
                other.dispatchEvent(new Event('force-pause'));
            }
        });
    }

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            pauseAllOthers();
            audio.play();
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
        } else {
            audio.pause();
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
        }
    });

    trackEl.addEventListener('force-pause', () => {
        audio.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    });

    audio.addEventListener('timeupdate', () => {
        const pct = (audio.currentTime / audio.duration) * 100 || 0;
        progressFill.style.width = pct + '%';
        timeLabel.textContent = formatTime(audio.duration - audio.currentTime);
    });

    audio.addEventListener('ended', () => {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        progressFill.style.width = '0%';
        timeLabel.textContent = formatTime(audio.duration);
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    });
});