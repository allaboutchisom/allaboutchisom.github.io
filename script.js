function showMessage(){
    document.getElementById("secretMessage").classList.toggle("hidden");
}

/* COUNTDOWN */
const birthday = new Date("May 20, 2026 00:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

},1000);

/* HEARTS */
function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,300);

/* NETFLIX INTRO FIX (SMOOTH VERSION - NO FLASH) */
window.addEventListener("load", ()=>{

    const intro = document.getElementById("netflixIntro");
    const main = document.getElementById("mainContent");

    // 🔴 FORCE MAIN TO EXIST IN LAYOUT
    main.style.display = "block";
    main.style.opacity = "0";

    setTimeout(()=>{

        // fade out intro
        intro.style.transition = "opacity 0.8s ease";
        intro.style.opacity = "0";

        setTimeout(()=>{

            // remove intro completely
            intro.style.display = "none";

            // show main properly (IMPORTANT FIX)
            main.style.transition = "opacity 1s ease";
            main.style.opacity = "1";

        },800);

    },3000);

});
function openSong(){

    const song = document.getElementById("songPlayer");

    song.style.display =
        (song.style.display === "block") ? "none" : "block";

}
