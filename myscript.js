var PosX = 0;
var PosY = 0;
var rotate = 5;

// Move the ball
document.getElementById("bntUp").addEventListener("mousedown",moveup);
document.getElementById("bntDown").addEventListener("mousedown",movedown);
document.getElementById("bntLeft").addEventListener("mousedown",moveleft);
document.getElementById("bntRight").addEventListener("mousedown",moveright);

function init(){
    let the_ball = document.getElementById("the_ball");
    the_ball.style.top = 0;
    the_ball.style.left = 0;
    the_ball.style.position = "absolute";
    the_ball.style.width = "200px";
    the_ball.style.height = "200px";
}
function moving (x,y){
    let the_ball = document.getElementById("the_ball");
    PosX += x;
    PosY += y;
    if (x > 0 | y > 0){
        rotate += 20;
    }
        else{
            rotate -= 20;
        }
    // if (PosX < 0){
    //     PosX = 0;
    // }
    //     else{
    //         if (PosX > window.innerWidth){
    //             PosX = window.innerWidth;
    //         }
    //             else{
    //                 PosX += x;
    //             };
    //     };

    // if (PosY < 0){
    //     PosY = 0;
    // }
    //     else{
    //         if (PosY > window.innerHeight){
    //             PosY = window.innerHeight;
    //         }
    //             else{
    //                 PosY += y;
    //             };
    //     };
    updatePos();
}

function updatePos(){
    let the_ball = document.getElementById("the_ball");
    the_ball.style.top = PosY + "px";
    the_ball.style.left = PosX + "px";
    the_ball.style.transform = `rotate(${rotate}deg)`;
}

function moveright(){
    if (PosX + parseInt(the_ball.style.width) < innerWidth){
        moving(30,0);
    }
};
function moveleft(){
    if (PosX > 0){
        moving(-30,0);
    }
};
function moveup(){
    if (PosY > 0){
        moving(0,-30);
    }
};
function movedown(){
    if (PosY + parseInt(the_ball.style.height) < innerHeight){
        moving(0,30);
    }
};
