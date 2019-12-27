let canvas = document.getElementById('field')
canvas.width = window.innerWidth - 100 ;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

// ADD SCORE
let score = 0
ctx.font = "30px Verdana";
ctx.textAlign = 'center'
// RANDOM IMAGE LOCATION ON CANVAS
let rand 
let x 
let y 
// INTERVAL VARIABLE
let interval = 1000
// SOUND EFFECT VARIABLE
let slapStatus = true
// DOM CLICK FROM HTML
function startGame(){
    canvas.style.visibility = 'visible'
    let startBtn = document.getElementById('start-game')
    let startBtn2 = document.getElementById('start-game-2')
    document.getElementById('kahoot').play()
    if (startBtn.innerHTML == 'STOP'){
        stop()
        startBtn.innerHTML = 'START'
    }else{
        startBtn2.remove()
        start()
        startBtn.innerHTML = 'STOP'
        loadInterval = window.setInterval(start, interval--)
    }
}
// START GAME
function start(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    scoreElem = document.getElementById('score')
    scoreElem.innerHTML = score
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
    scoreElem.innerHTML = 0
}

// MOUSEDOWN EVENT
window.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {

    if (e.button != 0) return;

    let mouseXinCanvas = e.clientX;
    let mouseYinCanvas = e.clientY;
    // MAKE SURE THAT IT CLICK THE RIGHT AREA
    if (mouseXinCanvas > 100){
    if (x <= mouseXinCanvas && x+300 >= mouseXinCanvas && y <= mouseYinCanvas && y+200 >= mouseYinCanvas){
        score++
        if (slapStatus == true){
            document.getElementById('slap').play()
            slapStatus = false
            console.log('slap')
        }else{
            document.getElementById('punch').play()
            slapStatus = true
            console.log('punch')
        }
        if (rand == 3 || rand == 6 || rand == 14){
            document.getElementById('scream').play()
        }
        scoreElem.innerHTML = score
        ctx.clearRect(x, y, 200, 200)
        console.log(rand)
        loadImage(rand, x, y, false)
    } else {
        score--
        document.getElementById('kentut').play()
        scoreElem.innerHTML = score
        if (score < 0){
            alert('Cupu lu')
            location.reload(true)
        }
        console.log("x =" + x)
        console.log("y =" + y)
        console.log("mouseXincanvas =" + mouseXinCanvas)
        console.log("mouseYincanvas =" + mouseYinCanvas)
    }
}
};


