console.log("Welcome to Chath Playlist");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aaye Navratra Mata Ke", filePath: "songs/1.mp3", coverPath: "5.jpeg"},
    {songName: " Meri Ankhiyo Ke Samne Hi Rahna Wo Sherowali Jagdambey", filePath: "songs/2.mp3", coverPath: "6.jpeg"},
    {songName: " Pyara Saja Hai Tera Dwar Bhawani ", filePath: "songs/8.mp3", coverPath: "7.webp"},
    {songName: "Man Ki Murade Puri Kar Maa Darshan Karne Ko Main To Aaungi ", filePath: "songs/4.mp3", coverPath: "5.jpeg"},
    {songName: "Maiya Ka Chola Hai Rangla", filePath: "songs/5.mp3", coverPath: "8.jpeg"},
    {songName: "Pawanawa Bhaajn Gaawata", filePath: "songs/6.mp3", coverPath: "1.jpeg"},
    {songName: "Nimiya Ke Dadhiya Dole", filePath: "songs/7.mp3", coverPath: "2.jpeg"},
    {songName: "Mathawa Pa Bandh Chunariya", filePath: "songs/18.mp3", coverPath: "3.jpeg"},
    {songName: "Ego Kaali Maai Baadi Hamara Gaaw", filePath: "songs/9.mp3", coverPath: "1.jpeg"},
    {songName: " Alaga Alaga Roop Me Rahelu Maai Kabahu Banke Sati Kuwari Chal Jalu", filePath: "songs/10.mp3", coverPath: "2.jpeg"},
    {songName: "Amrit Ki Barse Badariya Meri Maa Ki Duwariya", filePath: "songs/11.mp3", coverPath: "8.jpeg"},
    {songName: "Beta Bulaye Jhat Dauri Chali Aaye Maa", filePath: "songs/12.mp3", coverPath: "5.jpeg"},
    {songName: "Bigadi Meri Banade Ae Sherwali Maiya", filePath: "songs/13.mp3", coverPath: "6.jpeg"},
    {songName: "Ambe Tu Hai Jagdambe Kaali", filePath: "songs/14.mp3", coverPath: "7.webp"},
    {songName: "Tu Hi Bata De Re Malan", filePath: "songs/15.mp3", coverPath: "2.jpeg"},
    {songName: "Jode Chunri Jode Kalsha", filePath: "songs/16.mp3", coverPath: "1.jpeg"},
    {songName: "Manbhave Mai Ke Chunariya Chatkar Saiya Lele Aiyaha", filePath: "songs/17.mp3", coverPath: "2.jpeg"},
    {songName: "Maiya ke Chunari ", filePath: "songs/3.mp3", coverPath: " 1.jpeg"},
    {songName: "Gah Gah Karela Aanganwa", filePath: "songs/19.mp3", coverPath: "2.jpeg"},
    {songName: "Ruk Ruk Ja Maiya", filePath: "songs/20.mp3", coverPath: "1.jpeg"},
    {songName: "Chanda 251", filePath: "songs/21.mp3", coverPath: "2.jpeg"},
    {songName: "Maiya geet", filePath: "songs/22.mp3", coverPath: "8.jpeg"},
    {songName: "Keshari Durga Puja", filePath: "songs/23.mp3", coverPath: "8.jpeg"},
    {songName: "Nimiya ka Dhar Maiya ", filePath: "songs/24.mp3", coverPath: "4.webp"},
    {songName: "Amrit ke Dhar", filePath: "songs/25.mp3", coverPath: "https://img.youtube.com/vi/YIODyk9obKs/mqdefault.jpg"},
    {songName: "Amrit ki bund kehu", filePath: "songs/26.mp3", coverPath: "1.jpeg"},
    {songName: "Pawan Old Bhojpuri geet", filePath: "songs/27.mp3", coverPath: "2.jpeg"},
    {songName: "Ghar Mai Aaru Ke ful Ka Haar ho", filePath: "songs/28.mp3", coverPath: "3.jpeg"}
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=27){
        songIndex = 0
       
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})