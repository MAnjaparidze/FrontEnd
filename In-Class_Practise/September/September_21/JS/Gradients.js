window.onload = () => {
    let canvas = document.querySelector('#canvas');
    let context = canvas.getContext('2d');

    let borderColor = '#c8c8c8';

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // Outer Gradient

    // context.beginPath();
    // let gradient = context.createLinearGradient(centerX, 20, centerX, 200);
    // gradient.addColorStop(0, '#fff');
    // gradient.addColorStop(1, '#444');

    // context.rect(20, 20, canvas.width - 40, canvas.height - 40);
    // context.fill();
    // context.strokeStyle = 'borderColor';
    // context.stroke();
    // context.closePath();

    // Linear Gradient
    context.beginPath();
    let gradient = context.createLinearGradient(centerX, 20, centerX, 200);

    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, 'red');

    context.fillStyle = gradient;
    context.arc(centerX, centerY / 1.2, 80, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    context.closePath();

}