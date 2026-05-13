*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:linear-gradient(to bottom,#2b1055,#7597de);
    color:white;
    overflow-x:hidden;
    text-align:center;
}

.hero{
    padding:100px 20px;
}

.hero h1{
    font-size:3.5rem;
    margin-bottom:10px;
}

.subtitle{
    margin-bottom:30px;
    font-weight:300;
}

.love-letter{
    max-width:800px;
    margin:auto;
    line-height:1.9;
    background:rgba(255,255,255,0.08);
    padding:30px;
    border-radius:20px;
}

#countdown{
    font-size:2rem;
    margin-top:30px;
}

button{
    margin-top:30px;
    padding:15px 30px;
    border:none;
    border-radius:30px;
    background:white;
    color:#6a0dad;
    cursor:pointer;
    font-size:1rem;
}

.hidden{
    display:none;
}

#secretMessage{
    margin-top:20px;
    font-size:1.1rem;
}

.gallery{
    padding:80px 20px;
}

.photos{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
}

.photo-card{
    width:250px;
}

.photo-card img{
    width:100%;
    height:320px;
    object-fit:cover;
    border-radius:20px;
}

.photo-card p{
    margin-top:10px;
}

.video-section{
    padding:80px 20px;
}

video{
    width:80%;
    max-width:800px;
    border-radius:20px;
}

.heart{
    position:fixed;
    top:-10px;
    color:#ffccff;
    animation:fall linear forwards;
}

@keyframes fall{
    to{
        transform:translateY(110vh);
    }
}.birthday-message{
    margin-top:30px;
    padding:20px;
    background:rgba(255,255,255,0.1);
    border-radius:20px;
    max-width:700px;
    line-height:1.8;
    margin-left:auto;
    margin-right:auto;
}

.birthday-message h2{
    margin-bottom:10px;
}.typing-text{
    font-size:1.3rem;
    margin-top:25px;
    color:white;
    font-weight:bold;
    border-right:2px solid white;
    width:fit-content;
    margin-left:auto;
    margin-right:auto;
    white-space:nowrap;
    overflow:hidden;
}.glow-text{
    margin-top:25px;
    font-size:1.3rem;
    text-align:center;
    color:#fff;
    animation: glow 2s infinite alternate;
}

@keyframes glow{
    from{
        text-shadow: 0 0 5px #b57aff, 0 0 10px #b57aff, 0 0 20px #b57aff;
    }
    to{
        text-shadow: 0 0 10px #ffffff, 0 0 20px #d6a4ff, 0 0 30px #b57aff;
    }
}
/* SPECIAL SONG SECTION */

.special-song{
    margin-top:80px;
    text-align:center;
}

.music-btn{
    padding:18px 30px;
    border:none;
    border-radius:40px;
    background:#b57aff;
    color:white;
    font-size:1rem;
    cursor:pointer;
    box-shadow:0 0 20px #b57aff;
    transition:0.3s;
}

.music-btn:hover{
    transform:scale(1.05);
}

.hidden-song{
    display:none;
    margin-top:30px;
}

.song-text{
    margin-bottom:20px;
    font-size:1.1rem;
}

audio{
    width:80%;
    max-width:500px;
}
