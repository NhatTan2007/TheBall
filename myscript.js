var PosX = 0;
var PosY = 0;
var rotate = 5;

//set CSS color for button when don't click or press the direction keyboard
window.addEventListener("mouseup",setColorBtn);
window.addEventListener("keyup",setColorBtn);

function setColorBtn() {
    document.getElementById("bntUp").style.backgroundColor = "rgb(228, 228, 228)";
    document.getElementById("bntDown").style.backgroundColor = "rgb(228, 228, 228)";
    document.getElementById("bntLeft").style.backgroundColor = "rgb(228, 228, 228)";
    document.getElementById("bntRight").style.backgroundColor = "rgb(228, 228, 228)";
}

// Move the ball by mouse
document.getElementById("bntUp").addEventListener("mousedown",moveup);
document.getElementById("bntDown").addEventListener("mousedown",movedown);
document.getElementById("bntLeft").addEventListener("mousedown",moveleft);
document.getElementById("bntRight").addEventListener("mousedown",moveright);

// Move the ball by direction keyboard
window.addEventListener("keydown",getKeyCode);
function getKeyCode(event){
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 38:
            moveup();
            break;
        case 37:
            moveleft();
            break;
        case 39:
            moveright();
            break;
        case 40:
            movedown();
    }
}
function init(){
    let the_ball = document.getElementById("the_ball");
    the_ball.style.top = 0;
    the_ball.style.left = 0;
    the_ball.style.position = "absolute";
    the_ball.style.width = "200px";
    the_ball.style.height = "200px";
}
function moving (speedX,speedY){
    let the_ball = document.getElementById("the_ball");
    PosX += speedX;
    PosY += speedY;
    if (speedX > 0 | speedY > 0){
        rotate += 20;
    }
        else{
            rotate -= 20;
        }
    updatePos();
}

function updatePos(){
    let the_ball = document.getElementById("the_ball");
    the_ball.style.top = PosY + "px";
    the_ball.style.left = PosX + "px";
    the_ball.style.transform = `rotate(${rotate}deg)`;
}

function moveright(){
    document.getElementById("bntRight").style.backgroundColor = "rgb(134 134 134)";
    if (PosX + parseInt(the_ball.style.width) < innerWidth){
        let speed = 30;
        if (innerWidth - PosX - parseInt(the_ball.style.width) < speed) {
            speed = innerWidth - PosX - parseInt(the_ball.style.width);
        }
        moving(speed,0);
    }
};
function moveleft(){
    document.getElementById("bntLeft").style.backgroundColor = "rgb(134 134 134)";
    if (PosX > 0){
        let speed = 30;
        if (PosX < speed) {
            speed = PosX;
        }
        moving(-speed,0);
    }
};
function moveup(){
    document.getElementById("bntUp").style.backgroundColor = "rgb(134 134 134)";
    if (PosY > 0){
        let speed = 30;
        if (PosY < speed) {
            speed = PosY;
        }
        moving(0,-speed);
    }
};
function movedown(){
    document.getElementById("bntDown").style.backgroundColor = "rgb(134 134 134)";
    if (PosY + parseInt(the_ball.style.height) < innerHeight){
        let speed = 30;
        if (innerHeight - PosY - parseInt(the_ball.style.height) < speed) {
            speed = innerHeight - PosY - parseInt(the_ball.style.height);
        }
        moving(0,speed);
    }
};
