let confirmBtn = document.querySelector('#confirmBtn');
let colorBtn = document.querySelector('#colorBtn');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');



confirmBtn.addEventListener('click', confirmData);
colorBtn.addEventListener('click', chooseRandomColor);

class Command {
    constructor(obj) {
        this._subject = obj;
        this.commandsExecuted = [];
        this.previousCommands = [];
    }
    
}









function confirmData() {
    let fontSize = document.querySelector('#fontSize').value;
    let borderSize = document.querySelector('#borderSize').value;
    let textArea = document.querySelector('#textArea');

    textArea.style.fontSize = `${fontSize}px`;
    textArea.style.borderWidth = `${borderSize}px`;
}

function chooseRandomColor() {
    let textArea = document.querySelector('#textArea');

    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    textArea.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
}

