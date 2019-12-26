let canvas = document.getElementById('field')
let ctx = canvas.getContext('2d')


canvas.onload="myMove"

function startGame(){
    let startBtn = document.getElementById('start-game')
    startBtn.innerHTML = 'RESTART'
    start()
}
function start(){
    loadImage()
}
function loadImage(){
    let rand = Math.round(Math.random()*19)
    let image = new Image();
    image.onload = function(){
    let x = Math.random()*innerWidth;
    let y = Math.random()*innerHeight;
    ctx.drawImage(image, x, y, 100, 100)
    }
image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`
}