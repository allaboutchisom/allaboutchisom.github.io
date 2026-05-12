function showMessage(){
    document.getElementById("secretMessage").classList.toggle("hidden");
}

/* HEARTS */
function createHeart(){
    const heart = document.createElement("div");
    heart.innerHTML = "💜";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "20px";
    heart.style.animation = "fall 5s linear";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),5000);
}

setInterval(createHeart,400);

/* INTRO CONTROL (MAIN FIX) */
window.addEventListener("DOMContentLoaded", ()=>{

    const intro = document.getElementById("netflixIntro");
    const main = document.getElementById("mainContent");

    setTimeout(()=>{

        intro.style.opacity = "0";

        setTimeout(()=>{

            intro.style.display = "none";

            main.style.opacity = "1";

        },1000);

    },2500);

});

/* SONG TOGGLE */
function openSong(){
    const song = document.getElementById("songPlayer");
    song.style.display = (song.style.display === "block") ? "none" : "block";
}
