function showMessage() {
    const msg = document.getElementById('secretMessage');
    msg.classList.toggle('hidden');
}

function openSong() {
    const player = document.getElementById('songPlayer');
    player.classList.toggle('hidden-song');
}

function createHearts() {
    const container = document.querySelector('.hearts');

    setInterval(() => {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '💜';

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 0.4 + 0.6) + 'rem';
        heart.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
        heart.style.animationDelay = '0s';

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 2500);
    }, 80);
}

createHearts();
