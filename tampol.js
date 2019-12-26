let canvas = document.getElementById('field')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d')


canvas.onload="myMove"

function startGame(){
    canvas.style.visibility = 'visible'
    let startBtn = document.getElementById('start-game')
    if (startBtn.innerHTML == 'STOP'){
        stop()
        startBtn.innerHTML = 'START'
    }else{
        startBtn.innerHTML = 'STOP'
        loadInterval = window.setInterval(start, 600)
    }
}
function start(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    loadImage()
}
function loadImage(){
    let rand = Math.ceil(Math.random()*19)
    let image = new Image();
    image.onload = function(){
    let x = Math.round(Math.random()*(canvas.width-200));
    let y = Math.round(Math.random()*(canvas.height-200));
    ctx.drawImage(image, x, y, 200, 200)
    }
image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`
}
function stop(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    window.clearInterval(loadInterval)
}