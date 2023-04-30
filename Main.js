noseX = 0;
noseY = 0;

function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(600);
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();
}

function draw(){
    image(video, 0,0, 700, 500);
}