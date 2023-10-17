nosex = 0;
nosey = 0;
       
function preload()
{
img = loadImage("l1.png");
}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();   

    p = ml5.poseNet(video, modelloaded);
    p.on("pose", gotposes);
}

function modelloaded()
{
    console.log("Model has successfully been loaded.")
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
    }
    

function draw()
{
    image(video,0,0,300,300);
    fill("red");
    stroke("black");
    image(img, nosex, nosey, 50, 50);
}

function save()
{
    save("lipstick_filter_snapshot.jpg")
}