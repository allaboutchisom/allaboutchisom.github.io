function showMessage(){
    document.getElementById("secretMessage").classList.toggle("hidden");
}

const birthday = new Date("May 20, 2026 00:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    days + "d " +
    hours + "h " +
    minutes + "m " +
    seconds + "s ";

},1000);

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
const text = "You are not just special… you are unforgettable 💜";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();
window.addEventListener("load", ()=>{

    setTimeout(()=>{

        document.getElementById("netflixIntro")
        .style.display = "none";

        document.getElementById("mainContent")
        .style.display = "block";

    },4000);

});
