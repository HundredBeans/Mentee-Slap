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
let dx
let dy 
// SOUND EFFECT VARIABLE
let slapStatus = true
// DOM CLICK FROM HTML
function startGame2(){
    canvas.style.visibility = 'visible'
    let buttonDel = document.getElementById('start-game')
    let buttonPress = document.getElementById('start-game-2')
    if (buttonPress.innerHTML == 'STOP'){
        stop()
        buttonPress.innerHTML = 'START'
    }else{
        buttonDel.remove()
        buttonPress.innerHTML = 'STOP'
        start2()
    }
}
// START GAME
function start2(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // ctx.fillText(score, canvas.width/2, 50);
    scoreElem = document.getElementById('score')
    scoreElem.innerHTML = score
    // RANDOM IMAGE LOCATION ON CANVAS
    rand = Math.ceil(Math.random()*20)
    x = Math.round(Math.random()*(canvas.width-200));
    y = Math.round(Math.random()*(canvas.height-200));
    dx = 1;
    dy = 1;
    console.log(dx)
    console.log(dy)
    // loadImage(rand, x, y)
    loadImageDynamic()
}

// STOP GAME
function stop(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    window.clearInterval(loadInterval)
    score = 0
}


console.log(rand)
// DYNAMIC IMAGE
function loadImageDynamic(status=true){
    requestAnimationFrame(loadImageDynamic)
    let image = new Image();
    image.onload = function(){
        ctx.clearRect(0,0,innerWidth,innerHeight)
        ctx.drawImage(image, x, y, 200, 200)
        if (x + 200 > canvas.width || x < 0) {
            dx = -dx
        }
        if (y + 200 > canvas.height || y < 0) {
            dy = -dy
        }
    }
    x += dx;
    y += dy;
    if (dx == 0 && dy == 0){
        image.src = `../Mentee-Slap/assets/img/after/circle-cropped(${rand}).png`
    } else {
        image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`
    }
    // mouse click change status
    // saat gambar di klik, gambar diam dan 
    // if (status == true){
    //     x += dx;
    //     y += dy;
    //     image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`;
    // } else {
    //     dx = 0
    //     dy = 0
    //     image.src = `../Mentee-Slap/assets/img/after/circle-cropped(${rand}).png`;
    // }
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
            scoreElem.innerHTML = score
            ctx.clearRect(x, y, 200, 200)
            console.log(rand)
            dx = 0
            dy = 0
            setTimeout(start2, 1500)
            loadImageDynamic()
            if (slapStatus == true){
                document.getElementById('slap').play()
                slapStatus = false
                console.log('slap')
            }else{
                document.getElementById('punch').play()
                slapStatus = true
                console.log('punch')
            }
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

