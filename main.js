song = "";

function preload() {
    song = loadSound("HeatWaves.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, moldelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet ha sido inicializado");
}

function gotPoses(result) {
}

function draw() {
    image(video,0,0,500,500);
}