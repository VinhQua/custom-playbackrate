const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
let isDown = false;
const video = document.querySelector('video');

speed.addEventListener('mouseleave',()=>{
    isDown = false;
});
speed.addEventListener('mouseup',()=>{
    isDown = false;
});
speed.addEventListener('mousedown',(e)=>{
    isDown = true;
    const y = ((e.pageY - speed.offsetTop)/speed.offsetHeight*100).toFixed(2);
    const min = 0.4;
    const max = 4;
    const percent = y*(1-0.1) + 10;
    playBackRate = (((e.pageY - speed.offsetTop)/speed.offsetHeight)*(max-min) + min).toFixed(2);
    speedBar.style.height = `${percent}%`;
    speedBar.textContent = `${playBackRate}x`;

});
speed.addEventListener('mousemove',(e)=>{
    if (!isDown) return;
    const y = ((e.pageY - speed.offsetTop)/speed.offsetHeight*100).toFixed(2);
    const min = 0.4;
    const max = 4;
    const percent = y*(1-0.1) + 10;
    playBackRate = (((e.pageY - speed.offsetTop)/speed.offsetHeight)*(max-min) + min).toFixed(2);
    speedBar.style.height = `${percent}%`;
    speedBar.textContent = `${playBackRate}x`;
    video.playbackRate = playBackRate;
});