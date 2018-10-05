window.onload = () => {
    let canvas = document.querySelector('#canvas');
    let context = canvas.getContext('2d');

    genarateImage();

    function genarateImage() {
        let height = canvas.height;
        let width = canvas.width;

        let pixels = context.createImageData(width, height);
        let centerX = width / 2;
        let centerY = height / 2;

        let currentPixelsPos = 0;

        for (let y = 0; y < pixels.height; y++) {
            for (let x = 0; x < pixels.width; x++) {
                let xOffset = x - centerX;
                let yOffset = y - centerY;

                let d = Math.abs(xOffset) + Math.abs(yOffset);
                let t = Math.tan(d / 10);

                let r = t * 255;
                let g = 125 + t * 80;
                let b = 255 + t * 20;

                pixels.data[currentPixelsPos++] = Math.max(0, Math.min(255, r));
                pixels.data[currentPixelsPos++] = Math.max(0, Math.min(255, g));
                pixels.data[currentPixelsPos++] = Math.max(0, Math.min(255, b));
                pixels.data[currentPixelsPos++] = Math.random() * 1000;
            }
        }
        context.putImageData(pixels, 0, 0);

    }
}