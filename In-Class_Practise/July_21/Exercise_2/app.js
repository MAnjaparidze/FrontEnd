let btn = document.getElementById('button');




btn.addEventListener('click', function () {
    let fontSize = document.getElementById('fontSize').value;
    let color = document.getElementById('color').value;
    let textPosition = document.getElementById('textPosition').value;
    let divId = document.getElementById('divId').value;

    let target = document.getElementById(`${divId}`);
    target.style.fontSize = fontSize + "px";
    target.style.color = color;
    if (textPosition == "top") {
        let top = "flex-start";
        target.style.alignContent = top;
    }
    if (textPosition == "bottom") {
        let bottom = "flex-end";
        target.style.alignContent = bottom;
    }
    else {
        target.style.justifyContent = textPosition;
        target.style.alignContent = textPosition;
        
    }

});