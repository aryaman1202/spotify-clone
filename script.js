let songImage = document.getElementById('songThumbnail');
let masterPlay = document.getElementById('image-2');
let audioElement = new Audio();
let myProgressbar = document.getElementById("progressBar");
let masterPlay1 = document.getElementById('img-1');
let audioElement1 = new Audio("animals.mp3");
let masterPlay2 = document.getElementById('img-2');
let audioElement2 = new Audio("stay.mp3");
let masterPlay3 = document.getElementById('img-3');
let audioElement3 = new Audio("montero.mp3");
let masterPlay4 = document.getElementById('img-4');
let audioElement4 = new Audio("heat-waves.mp3");
let masterPlay5 = document.getElementById('img-5');
let audioElement5 = new Audio("watermelon-sugar.mp3");
let masterPlay6 = document.getElementById('img-6');
let audioElement6 = new Audio("love-nwantini.mp3");
let masterPlay7 = document.getElementById('img-7');
let audioElement7 = new Audio("closer.mp3");
let masterPlay8 = document.getElementById('img-8');
let audioElement8 = new Audio("memory.mp3");
let masterPlay9 = document.getElementById('img-9');
let audioElement9 = new Audio("go-crazy.mp3");
let masterPlay10 = document.getElementById('img-10');
let audioElement10 = new Audio("falling.mp3");
var playIcon = [masterPlay1,masterPlay2,masterPlay3,masterPlay4,masterPlay5,masterPlay6,masterPlay7,masterPlay8,masterPlay9,masterPlay10];
var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];

//song-1


masterPlay1.addEventListener('click',function msp1(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=0){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement1.paused || audioElement1.currentTime<=0){
        audioElement1.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay1.src = "pause.png";
        songImage.src = "https://i.pinimg.com/474x/e1/8a/84/e18a84d895a57fe3d1cce87d368de564.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Animals";
        document.getElementById("snger").textContent = "Maroon 5";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp1);
    }
    else{
        audioElement1.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay1.src = "play.png";
        songImage.src = "https://i.pinimg.com/474x/e1/8a/84/e18a84d895a57fe3d1cce87d368de564.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Animals";
        document.getElementById("snger").textContent = "Maroon 5";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp1);
    }
})
audioElement1.addEventListener('timeupdate', () => {
    progress1 = parseInt((audioElement1.currentTime/audioElement1.duration)*100);
    myProgressbar.value = progress1;
})
myProgressbar.addEventListener('change', () => {
    audioElement1.currentTime =  myProgressbar.value * audioElement1.duration/100;
})

//song-2


masterPlay2.addEventListener('click',function msp2(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=1){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay2.src = "pause.png";
        songImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png/220px-The_Kid_Laroi_and_Justin_Bieber_-_Stay.png";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "STAY";
        document.getElementById("snger").textContent = "Kid LAROI, Justin Beiber";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp2);
    }
    else{
        audioElement2.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay2.src = "play.png";
        songImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png/220px-The_Kid_Laroi_and_Justin_Bieber_-_Stay.png";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "STAY";
        document.getElementById("snger").textContent = "Kid LAROI, Justin Beiber";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp2);
    }
})
audioElement2.addEventListener('timeupdate', () => {
    progress2 = parseInt((audioElement2.currentTime/audioElement2.duration)*100);
    myProgressbar.value = progress2;
})
myProgressbar.addEventListener('change', () => {
    audioElement2.currentTime =  myProgressbar.value * audioElement2.duration/100;
})

//song-3


masterPlay3.addEventListener('click',function msp3(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=2){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay3.src = "pause.png";
        songImage.src = "https://www.metroweekly.com/wp-content/uploads/2021/03/Screenshot-41.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Montero";
        document.getElementById("snger").textContent = "Lil Nas X";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp3);
    }
    else{
        audioElement3.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay3.src = "play.png";
        songImage.src = "https://www.metroweekly.com/wp-content/uploads/2021/03/Screenshot-41.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Montero";
        document.getElementById("snger").textContent = "Lil Nas X";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp3);
    }
})
audioElement3.addEventListener('timeupdate', () => {
    progress3 = parseInt((audioElement3.currentTime/audioElement3.duration)*100);
    myProgressbar.value = progress3;
})
myProgressbar.addEventListener('change', () => {
    audioElement3.currentTime =  myProgressbar.value * audioElement3.duration/100;
})

//song-4


masterPlay4.addEventListener('click',function msp4(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=3){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement4.paused || audioElement4.currentTime<=0){
        audioElement4.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay4.src = "pause.png";
        songImage.src = "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Heat Waves";
        document.getElementById("snger").textContent = "Glass Animals";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp4);
    }
    else{
        audioElement4.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay4.src = "play.png";
        songImage.src = "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Heat Waves";
        document.getElementById("snger").textContent = "Glass Animals";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp4);
    }
})
audioElement4.addEventListener('timeupdate', () => {
    progress4 = parseInt((audioElement4.currentTime/audioElement4.duration)*100);
    myProgressbar.value = progress4;
})
myProgressbar.addEventListener('change', () => {
    audioElement4.currentTime =  myProgressbar.value * audioElement4.duration/100;
})

//song-5


masterPlay5.addEventListener('click',function msp5(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=4){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement5.paused || audioElement5.currentTime<=0){
        audioElement5.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay5.src = "pause.png";
        songImage.src = "https://m.media-amazon.com/images/I/61uPLHJ4nPL._SS500_.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Watermelon Sugar";
        document.getElementById("snger").textContent = "Harry Styles";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp5);
    }
    else{
        audioElement5.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay5.src = "play.png";
        songImage.src = "https://m.media-amazon.com/images/I/61uPLHJ4nPL._SS500_.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Watermelon Sugar";
        document.getElementById("snger").textContent = "Harry Styles";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp5);
    }
})
audioElement5.addEventListener('timeupdate', () => {
    progress5 = parseInt((audioElement5.currentTime/audioElement5.duration)*100);
    myProgressbar.value = progress5;
})
myProgressbar.addEventListener('change', () => {
    audioElement5.currentTime =  myProgressbar.value * audioElement5.duration/100;
})

//song-6


masterPlay6.addEventListener('click',function msp6(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=5){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement6.paused || audioElement6.currentTime<=0){
        audioElement6.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay6.src = "pause.png";
        songImage.src = "https://www.rollingstone.com/wp-content/uploads/2021/09/ckay-explainer.jpg?resize=1800,1200&w=450";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Love Nwantini";
        document.getElementById("snger").textContent = "Ckay";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp6);
    }
    else{
        audioElement6.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay6.src = "play.png";
        songImage.src = "https://www.rollingstone.com/wp-content/uploads/2021/09/ckay-explainer.jpg?resize=1800,1200&w=450";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Love Nwantini";
        document.getElementById("snger").textContent = "Ckay";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp6);
    }
})
audioElement6.addEventListener('timeupdate', () => {
    progress6 = parseInt((audioElement6.currentTime/audioElement6.duration)*100);
    myProgressbar.value = progress6;
})
myProgressbar.addEventListener('change', () => {
    audioElement6.currentTime =  myProgressbar.value * audioElement6.duration/100;
})


//song-7


masterPlay7.addEventListener('click',function msp7(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=6){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement7.paused || audioElement7.currentTime<=0){
        audioElement7.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay7.src = "pause.png";
        songImage.src = "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/w9kk4pvcqrmswcomuhsf/closer-chainsmokers";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Closer";
        document.getElementById("snger").textContent = "The Chainsmokers";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp7);
    }
    else{
        audioElement7.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay7.src = "play.png";
        songImage.src = "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/w9kk4pvcqrmswcomuhsf/closer-chainsmokers";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Closer";
        document.getElementById("snger").textContent = "The Chainsmokers";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp7);
    }
})
audioElement7.addEventListener('timeupdate', () => {
    progress7 = parseInt((audioElement7.currentTime/audioElement7.duration)*100);
    myProgressbar.value = progress7;
})
myProgressbar.addEventListener('change', () => {
    audioElement7.currentTime =  myProgressbar.value * audioElement7.duration/100;
})

//song-8


masterPlay8.addEventListener('click',function msp8(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=7){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement8.paused || audioElement8.currentTime<=0){
        audioElement8.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay8.src = "pause.png";
        songImage.src = "https://i0.wp.com/ratingsgamemusic.com/wp-content/uploads/2021/07/02-kane-brown-blackbear-memory-cover-art-billboard-1548-1625087674-compressed.jpeg?fit=1548%2C1024";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Memory";
        document.getElementById("snger").textContent = "Kane Brown";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp8);
    }
    else{
        audioElement8.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay8.src = "play.png";
        songImage.src = "https://i0.wp.com/ratingsgamemusic.com/wp-content/uploads/2021/07/02-kane-brown-blackbear-memory-cover-art-billboard-1548-1625087674-compressed.jpeg?fit=1548%2C1024";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Memory";
        document.getElementById("snger").textContent = "Kane Brown";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp8);
    }
})
audioElement8.addEventListener('timeupdate', () => {
    progress8 = parseInt((audioElement8.currentTime/audioElement8.duration)*100);
    myProgressbar.value = progress8;
})
myProgressbar.addEventListener('change', () => {
    audioElement8.currentTime =  myProgressbar.value * audioElement8.duration/100;
})

//song-9


masterPlay9.addEventListener('click',function msp9(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=8){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement9.paused || audioElement9.currentTime<=0){
        audioElement9.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay9.src = "pause.png";
        songImage.src = "https://images.genius.com/d0617dbe625456f4ead2cdd00fcff3cb.1000x1000x1.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Go Crazy";
        document.getElementById("snger").textContent = "Chris Brown";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp9);
    }
    else{
        audioElement9.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay9.src = "play.png";
        songImage.src = "https://images.genius.com/d0617dbe625456f4ead2cdd00fcff3cb.1000x1000x1.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Go Crazy";
        document.getElementById("snger").textContent = "Chris Brown";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp9);
    }
})
audioElement9.addEventListener('timeupdate', () => {
    progress9 = parseInt((audioElement9.currentTime/audioElement9.duration)*100);
    myProgressbar.value = progress9;
})
myProgressbar.addEventListener('change', () => {
    audioElement9.currentTime =  myProgressbar.value * audioElement9.duration/100;
})

//song-10


masterPlay10.addEventListener('click',function msp10(){
    for(var i=0;i<=9;i++){
        var songs = [audioElement1,audioElement2,audioElement3,audioElement4,audioElement5,audioElement6,audioElement7,audioElement8,audioElement9,audioElement10];
        if(i!=9){
            if(songs[i].played){
                songs[i].currentTime = 0;
                songs[i].pause();
                playIcon[i].src = "play.png";
            }
        }
    }
    if(audioElement10.paused || audioElement10.currentTime<=0){
        audioElement10.play();
        document.getElementById('gif').style.visibility = "visible";
        masterPlay10.src = "pause.png";
        songImage.src = "https://i.pinimg.com/564x/de/b5/76/deb576c8978127e3973ca423fe40d073.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Falling";
        document.getElementById("snger").textContent = "Trevor Daniel";
        masterPlay.src = "pause.png";
        masterPlay.addEventListener('click', msp10);
    }
    else{
        audioElement10.pause();
        document.getElementById('gif').style.visibility = "hidden";
        masterPlay10.src = "play.png";
        songImage.src = "https://i.pinimg.com/564x/de/b5/76/deb576c8978127e3973ca423fe40d073.jpg";
        songImage.style.visibility = "visible";
        document.getElementById("sng").textContent = "Falling";
        document.getElementById("snger").textContent = "Trevor Daniel";
        masterPlay.src = "play.png";
        masterPlay.addEventListener('click', msp10);
    }
})
audioElement10.addEventListener('timeupdate', () => {
    progress10 = parseInt((audioElement10.currentTime/audioElement10.duration)*100);
    myProgressbar.value = progress10;
})
myProgressbar.addEventListener('change', () => {
    audioElement10.currentTime =  myProgressbar.value * audioElement10.duration/100;
})

//fast forward
