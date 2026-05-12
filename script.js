window.addEventListener("load", ()=>{

    const intro = document.getElementById("netflixIntro");
    const main = document.getElementById("mainContent");

    // ensure main is ready but invisible
    main.style.opacity = "0";

    setTimeout(()=>{

        // fade intro out
        intro.style.opacity = "0";
        intro.style.transition = "opacity 0.8s ease";

        // show main properly
        main.style.opacity = "1";

        main.style.transition = "opacity 0.8s ease";

        setTimeout(()=>{
            intro.style.display = "none";
        },800);

    },3000);

});
function openSong(){

    const song = document.getElementById("songPlayer");

    if(song.style.display === "block"){
        song.style.display = "none";
    }else{
        song.style.display = "block";
    }

}
