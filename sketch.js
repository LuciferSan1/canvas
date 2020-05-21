// variable declaration
var drawing = [];


function setup(){
    // creating canvas
    canvas = createCanvas(600,600);    

}



function draw(){
    background(255);  

    // A simple if block to start painting
    if(mouseIsPressed){
        var point = {
            x:mouseX,
            y:mouseY
        }
        drawing.push(point);
    }
    beginShape();
    stroke(0);
    strokeWeight(2);
    noFill();
    for(var i = 0;i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y)
    }

    endShape();

}

