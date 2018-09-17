//#region Modernizer
/*

if(Modernizer.canvas){
    //supported
}
else{
    //bad
}
*/
//#endregion Modernizer

window.onload = function () {
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.strokeStyle = 'black';
    // fillRect(x,y,w,h)
    context.rect(0, 0, 200, 100);
    context.fill();
}