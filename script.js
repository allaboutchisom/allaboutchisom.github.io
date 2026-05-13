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
        heart.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.animationDelay = (Math.random() * 2) + 's';

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }, 300);
}

createHearts();
