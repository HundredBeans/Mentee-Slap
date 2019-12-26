let canvas = document.getElementById('field')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

// ADD SCORE
let score = 1
ctx.font = "30px Verdana";
ctx.textAlign = 'center'
// IMAGE LOCATION ON CANVAS
let x;
let y; 
// DOM CLICK FROM HTML
function startGame(){
    canvas.style.visibility = 'visible'
    let startBtn = document.getElementById('start-game')
    if (startBtn.innerHTML == 'STOP'){
        stop()
        startBtn.innerHTML = 'START'
    }else{
        startBtn.innerHTML = 'STOP'
        loadInterval = window.setInterval(start, 800)
    }
}
// START GAME
function start(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillText(score, canvas.width/2, 50);
    loadImage()
}
// CREATE IMAGE
function loadImage(){
    let rand = Math.ceil(Math.random()*19)
    let image = new Image();
    image.onload = function(){
    x = Math.round(Math.random()*(canvas.width-200));
    y = Math.round(Math.random()*(canvas.height-200));
    ctx.drawImage(image, x, y, 200, 200)
    }
image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`
}
// STOP GAME
function stop(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    window.clearInterval(loadInterval)
}
// MOUSEDOWN EVENT
window.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {

    if (e.button != 0) return;

    let mouseXinCanvas = e.clientX;
    let mouseYinCanvas = e.clientY;

    if (x <= mouseXinCanvas && x+200 >= mouseXinCanvas && y <= mouseYinCanvas && y+200 >= mouseYinCanvas){
        score++

    } else {
        score--
        console.log("x =" + x)
        console.log("y =" + y)
        console.log("mouseXincanvas =" + mouseXinCanvas)
        console.log("mouseYincanvas =" + mouseYinCanvas)
    }
};