noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
dif = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(150, 107)

    canvas = createCanvas(500,500);
    canvas.position(800,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('midnightblue');

    document.getElementById('fontsize').innerHTML = "The Font Size will be = " + dif + "px"

    fill('#5adbbf');
    stroke('#dbac76');
    strokeWeight(2);
    textSize(dif);
    textAlign(CENTER);
    text('Anchit', noseX, noseY)
}

function modelLoaded() {
    console.log("Modehl is rahdyh")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        console.log("noseX: " + noseX + " noseY: " + noseY);
        
        leftWristX = floor(results[0].pose.leftWrist.x);
        rightWristX = floor(results[0].pose.rightWrist.x);

        console.log("lWX: " + leftWristX + " rWX: " + rightWristX);

        dif = floor(leftWristX - rightWristX);
    }
}