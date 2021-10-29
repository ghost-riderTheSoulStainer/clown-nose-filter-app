function take_snapshot(){
    save('mywebsite.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    picture=createCapture(VIDEO);
    picture.hide();
    picture.size(300,300);
    posenet=ml5.poseNet(picture,modelloaded);
    posenet.on('pose',gotposes);
}
function draw(){
    image(picture,0,0,300,300);
}
function modelloaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose x="+results[0].pose.nose.x);
        console.log("Nose y="+results[0].pose.nose.y);
    }
}