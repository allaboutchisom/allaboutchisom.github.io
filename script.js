// INTRO
window.onload = function() {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        const mainSite = document.getElementById('mainSite');

        intro.style.transition = 'opacity 0.8s ease';
        intro.style.opacity = '0';

        setTimeout(() => {
            intro.style.display = 'none';
            mainSite.style.display = 'block';

            setTimeout(() => {
                mainSite.style.opacity = '1';
                createHearts();
            }, 50);

        }, 800);

    }, 4300);
};

// SHOW SECRET MESSAGE
function showMessage() {
    const msg = document.getElementById('secretMessage');
    msg.classList.toggle('hidden');
}

// OPEN SONG
function openSong() {
    const player = document.getElementById('songPlayer');
    player.classList.toggle('hidden-song');
}

// FALLING HEARTS
function createHearts() {
    const container = document.querySelector('.hearts');

    setInterval(() => {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '💜';

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = '0s';
        heart.style.top = '-30px';

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }, 80);
}
