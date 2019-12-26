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
let x = 10;
let y = 10;
let dx = 4;
let dy = 4;
function loadImage(){
    requestAnimationFrame(loadImage)
    let rand = 1
    let image = new Image();
    image.onload = function(){
        
        ctx.clearRect(0, 0, (innerWidth-100), (innerHeight));
        ctx.drawImage(image, x, y, 100, 100);
        if (x + 100 > canvas.width || x < 0) {
            dx = -dx;
        }
        if (y + 100 > canvas.height || y < 0) {
            dy = -dy;
        }

        // requestAnimationFrame(animate);
        // x += 1;
    }
    x += dx;
    y += dy;


    image.src = `../Mentee-Slap/assets/img/before/circle-cropped(${rand}).png`
}