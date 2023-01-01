console.log("welcome to spotify");
// initialize the varibles
let songeIndex = 0;
let audioElement =  new Audio('0.mp3.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songeItems = Array.from(document.getElementsByClassName('songeItems'));

let songs =[
    {songName:"sala-e-ishq", filepath:"songs/1.mp3.mp3", coverPath:"conver/0.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/2.mp3.mp3", coverPath:"conver/1.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/3.mp3.mp3", coverPath:"conver/2.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/4.mp3.mp3", coverPath:"conver/3.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/5.mp3.mp3", coverPath:"conver/4.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/6.mp3.mp3", coverPath:"conver/5.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/7.mp3.mp3", coverPath:"conver/6.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/8.mp3.mp3", coverPath:"conver/7.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/9.mp3.mp3", coverPath:"conver/8.jpg.jpg"},
    {songName:"sala-e-ishq", filepath:"songs/9.mp3.mp3", coverPath:"conver/9.jpg.jpg"}

]
songeItems.forEach((element) =>
    {
        
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName('songeName')[0].innerText =songs[i].songName;


    })




masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime <=0 ){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        
        gif .style.opacity = 0;

    }
})
//listen to event 
audioElement.addEventListener('timeupdate',()=>{
    
    // update seekbar
    progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressBar.value = progress;



})
myprogressBar.addEventListener('change',()=>
{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;

})
const makeAllPlays = ()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('farsongeIteamplayfa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songeItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays()
        songeIndex = parseInt(e.target.id);
        e.target.classList.remove('farsongeIteamplayfa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songeIndex+1}.1.mp3.mp3';
        audioElement.currentTime = 0;
 audioElement.play();
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songeIndex>9){
    songeIndex = 0;
    }
    else
    {
        songeIndex +=1;
    }
    audioElement.src = 'songs/${songeIndex+1}.1.mp3.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songeIndex<=0){
    songeIndex = 0;
    }
    else
    {
        songeIndex -=1;
    }
    audioElement.src = 'songs/${songeIndex+1}.1.mp3.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
    
