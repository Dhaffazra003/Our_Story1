const startDate =
new Date("2026-01-01 00:00:00");

console.log(startDate);

/* =========================
   TIMER
========================= */

function updateTimer(){

    const now = new Date();

    const difference =
    now - startDate;

    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference %
        (1000 * 60))
        / 1000
    );

    document
    .getElementById("loveTimer")
    .innerHTML =

    `${days} Hari
     ${hours} Jam
     ${minutes} Menit
     ${seconds} Detik ❤️`;
}

updateTimer();

setInterval(updateTimer,1000);



/* =========================
   SLIDESHOW
========================= */

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

    slides.forEach(slide=>{

        slide.classList.remove("active");
    });

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    slides[currentSlide]
    .classList.add("active");
}

setInterval(showSlide,3000);



/* =========================
   MUSIC
========================= */

/* =========================
   MUSIC PLAYER
========================= */

const songs = [

{
    title:"Penjaga Hati ❤️",
    src:"music/music1.mp3"
},

{
    title:"Masa Ini,nanti dan masa indah lainnya 🌸",
    src:"music/music2.mp3"
},

{
    title:"Everything u are ✨",
    src:"music/music3.mp3"
}

];

const bgMusic =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const songTitle =
document.getElementById("songTitle");

let songIndex = 0;

let isPlaying = false;



/* LOAD SONG */

function loadSong(){

    bgMusic.src =
    songs[songIndex].src;

    songTitle.innerHTML =
    "🎵 " + songs[songIndex].title;
}

loadSong();



/* PLAY / PAUSE */

musicBtn.addEventListener(
"click",

async ()=>{

    if(!isPlaying){

        await bgMusic.play();

        musicBtn.innerHTML = "⏸️";

        isPlaying = true;

    }else{

        bgMusic.pause();

        musicBtn.innerHTML = "▶️";

        isPlaying = false;
    }
});



/* NEXT SONG */

nextBtn.addEventListener(
"click",

()=>{

    songIndex++;

    if(songIndex >= songs.length){

        songIndex = 0;
    }

    loadSong();

    bgMusic.play();

    isPlaying = true;

    musicBtn.innerHTML = "⏸️";
});



/* PREVIOUS SONG */

prevBtn.addEventListener(
"click",

()=>{

    songIndex--;

    if(songIndex < 0){

        songIndex =
        songs.length - 1;
    }

    loadSong();

    bgMusic.play();

    isPlaying = true;

    musicBtn.innerHTML = "⏸️";
});



/* AUTO NEXT SONG */

bgMusic.addEventListener(
"ended",

()=>{

    songIndex++;

    if(songIndex >= songs.length){

        songIndex = 0;
    }

    loadSong();

    bgMusic.play();
});



/* =========================
   POPUP
========================= */

/* =========================
   POPUP LETTER TYPEWRITER
========================= */

const popup =
document.getElementById("popup");

const letterText =
`Untuk Salma Windy Fortuna,

aku tau akhir-akhir ini aku masih sering bikin kamu capek sama sedih terus sayang
dan jujur aku juga sedih banget kalau jadi alasan mood kamu berantakan terus karna aku sayang.

aku mungkin belum jadi cowo yang paling peka sekarang, masih banyak kurangnya juga dan masih belom bisa ugal-ugalan yang kamu harapkan karna ini pertama kalinya aku pacaran seumur hidup.

tapi aku beneran mau kok untuk belajar lagi pelan-pelan supaya bisa lebih ngerti kamu, lebih nemenin kamu kedepannya sayang, dan lebih bisa jagain perasaan kamu.

karena buat aku sekarang, yang paling penting itu kamu tetap ngerasa disayang dan ga sendirian waktu sama aku sayangku.

Dhaffazra ✨`;

const loveLetterText =
document.getElementById("loveLetterText");

let letterIndex = 0;



/* OPEN POPUP */

document
.getElementById("loveLetterBtn")
.addEventListener("click",()=>{

    popup.style.display = "flex";

    loveLetterText.innerHTML = "";

    letterIndex = 0;

    typeLetter();
});



/* TYPE EFFECT */

function typeLetter(){

    if(letterIndex < letterText.length){

        loveLetterText.innerHTML +=
        letterText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,45);
    }
}



/* CLOSE POPUP */

document
.getElementById("closePopup")
.addEventListener("click",()=>{

    popup.style.display = "none";
});



/* =========================
   DARK MODE
========================= */

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

    document.body
    .classList.toggle("dark-mode");
});
/* =========================
   OPENING SCREEN
========================= */

const openingScreen =
document.getElementById("openingScreen");

const enterBtn =
document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{

    openingScreen.style.opacity = "0";

    setTimeout(()=>{

        openingScreen.style.display = "none";

    },1000);
});