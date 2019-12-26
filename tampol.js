let canvas = document.getElementById('field')
canvas.width = window.innerWidth - 100 ;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

// ADD SCORE
let score = 1
ctx.font = "30px Verdana";
ctx.textAlign = 'center'
// RANDOM IMAGE LOCATION ON CANVAS
let rand 
let x 
let y 
// DOM CLICK FROM HTML
function startGame(){
    canvas.style.visibility = 'visible'
    let startBtn = document.getElementById('start-game')
    let startBtn2 = document.getElementById('start-game-2')
    if (startBtn.innerHTML == 'STOP'){
        stop()
        startBtn.innerHTML = 'START'
    }else{
        startBtn2.remove()
        startBtn.innerHTML = 'STOP'
        loadInterval = window.setInterval(start, 2000)
    }
}
// START GAME
function start(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillText(score, canvas.width/2, 50);
    // RANDOM IMAGE LOCATION ON CANVAS
    rand = Math.ceil(Math.random()*20)
    x = Math.round(Math.random()*(canvas.width-200));
    y = Math.round(Math.random()*(canvas.height-200));
    dx = (Math.random()-0.5)*6;
    dy = (Math.random()-0.5)*6;
    loadImage(rand, x, y)
    // loadImageDynamic( rand, x, y, dx, dy)
}

// CREATE IMAGE STATIC
function loadImage(rand, x, y, status=true){
    // rand = Math.ceil(Math.random()*19)
    let image = new Image();
    image.onload = function(){
    // x = Math.round(Math.random()*(canvas.width-200));
    // y = Math.round(Math.random()*(canvas.height-200));
    ctx.drawImage(image, x, y, 200, 200)
    };
    
    // mouse click change status
    if (status == true){
        image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`
    } else {
        image.src = `../Mentee-Slap/assets/img/after/circle-cropped(${rand}).png`
    }
}


// STOP GAME
function stop(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    window.clearInterval(loadInterval)
    score = 1
}

// MOUSEDOWN EVENT
window.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {

    if (e.button != 0) return;

    let mouseXinCanvas = e.clientX;
    let mouseYinCanvas = e.clientY;

    if (x <= mouseXinCanvas && x+300 >= mouseXinCanvas && y <= mouseYinCanvas && y+200 >= mouseYinCanvas){
        score++
        ctx.clearRect(x, y, 200, 200)
        console.log(rand)
        loadImage(rand, x, y, false)
    } else {
        score--
        console.log("x =" + x)
        console.log("y =" + y)
        console.log("mouseXincanvas =" + mouseXinCanvas)
        console.log("mouseYincanvas =" + mouseYinCanvas)
    }
};


