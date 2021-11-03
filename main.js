noseX=0;
noseY=0;

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
    image(clown_nose,noseX,noseY,30,30);
}
function modelloaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("Nose x="+noseX);
        console.log("Nose y="+noseY);
    }
}
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}