function setup(){
    canvas=createCanvas(370,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()
}
function take_snapshot(){
    save("Image Saved")
}
function draw(){
    image(video,0,0,370,300);
}