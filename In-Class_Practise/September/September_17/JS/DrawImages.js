window.onload = function () {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');

    let img = new Image();
    img.onload = function () {
        drawImage(img);
    }
    img.src = 'images/html5.png';
}

function drawImage(img) {
    let destX = 10;
    let destY = 20;

    let destWidth = 212;
    let destHeight = 212;

    //drawImage(img, dx,dy,dw,dh)
    context.drawImage(img,destX, destY, destWidth, destHeight);
}

function showCanvasAsImage() {
    let dataUrl
}