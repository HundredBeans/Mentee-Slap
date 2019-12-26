let canvas = document.getElementById('field')
let ctx = canvas.getContext('2d')
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.onload="myMove"

function startGame(){
    let startBtn = document.getElementById('start-game')
    startBtn.innerHTML = 'RESTART'
    start()
}

// function myMove() {
//     var elem = document.getElementById("myAnimation")
//     var pos = 0;
//     var id = setInterval(frame, 10)
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id)
//         } else {
//             pos++;
//             elem.style.top = pos + 'px'
//             elem.style.left = pos + 'px'
//         }
//     startBtn = document.getElementById("start-game")
//     startBtn.innerHTML = 'RESTART'
//     startGame()
//     }
// }