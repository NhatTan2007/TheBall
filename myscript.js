var PosX = 0;
var PosY = 0;

// Move the ball
document.getElementById("bntUp").addEventListener("mousedown",moveup);
document.getElementById("bntDown").addEventListener("mousedown",movedown);
document.getElementById("bntLeft").addEventListener("mousedown",moveleft);
document.getElementById("bntRight").addEventListener("mousedown",moveright);

function moving (x,y){
    var the_ball = document.getElementById("the_ball")
    if (PosX < 0){
        PosX = 0;
    }
    else{
        if (PosX > screen.width){
            PosX = screen.width;
        }
        else{
            PosX += x;
        }
    }

    if (PosY < 0){
        PosY = 0;
    }
    else{
        if (PosY > screen.height){
            PosY = screen.height;
        }
        else{
            PosY += y;
        }
    }
    updatePos();
}

function updatePos(){
    the_ball.style.top = PosY + "px";
    the_ball.style.left = PosX + "px";
}

function moveright(){
    moving(10,0);
};
function moveleft(){
    moving(-10,0);
};
function moveup(){
    moving(0,-10);
};
function movedown(){
    moving(0,10);
};
