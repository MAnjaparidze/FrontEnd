// #region Add New Day
const marksList = document.querySelector('.container .mainDisplay .displayTable .markingSide'); // Assigns the mark table to marksList
let date = new Date(2018, 3, 28);       // Creates date starting from 28 of April in order to be used in assigning of dates to new days

const addDay = document.querySelector('.container .mainDisplay .displayHeader #addDay'); // Gets the button with id="#addDay" and assigns to addDay

// Create Date Function
function createDate() {

    if (date.getDay() == '1' || date.getDay() == '3' || date.getDay() == '6') { // Checks if day is Monday, Wednesday or Saturday
        date = new Date(date.getTime() + 2 * (24 * 60 * 60 * 1000));
        let showDate = date.toString();
        let printDate = showDate.split(" ");        // Splits whole string in order to get only usefull parts
        return `${printDate[0]} ${printDate[1]} ${printDate[2]}`    // Gets only Month, Day and Year from a String
    }
    else if (date.getDay() == '5') {        //Checks if day is Friday
        date = new Date(date.getTime() + (24 * 60 * 60 * 1000))
        let showDate = date.toString();
        let printDate = showDate.split(" ");            // Splits whole string in order to get only usefull parts
        return `${printDate[0]} ${printDate[1]} ${printDate[2]}`        // Gets only Month, Day and Year from a String
    }
}
addDay.addEventListener('click', function (e) { // Adding eventListener of click on button addDay and assigning function of creating new HTML document
    const column = document.createElement("div");   // Creates column div 
    column.classList.add('column');
    column.style.height = "540px";   // Assigns class 'column' to column div
    const date = document.createElement("div"); // Creating div for date
    date.setAttribute('id', 'date');    //Assigning id 'date' to div date
    var d = createDate();

    // content
    date.textContent = d;           // Inputs date to be seen on display

    column.appendChild(date);       // Assigns date to column
    for (i = 0; i < 15; i++) {         // Loop for creating 15 div elements for each student
        const markCell = document.createElement("div");
        markCell.setAttribute('id', i);
        markCell.classList.add('markCell');
        markCell.style.backgroundColor = 'red';
        markCell.textContent = 0;


        column.appendChild(markCell); // Appends divs to column
    }

    marksList.appendChild(column);      //Appends column to mark Table

    let marks = document.getElementsByClassName("markCell");
    for (let i = 0; i < marks.length; i++) {
        marks[i].addEventListener("click", addMark);
    }
    calcAverage();

});
//#region Add mark and Change Color of MarkBox 

function addMark(e) {
    //Adding mark to a markCell
    let insertMark = prompt("Please enter a mark: ")
    if (insertMark >= 5) {
        e.target.textContent = 5;
    }
    else if (insertMark < 5 && insertMark > 0) {
        e.target.textContent = insertMark;
    }
    else {
        e.target.textContent = 0;
    }
    // End of Adding mark to a markCell

    //Changing Color to a div according to input
    if (e.target.textContent > "0") {
        e.target.style.backgroundColor = "green";
    }
    else {
        e.target.style.backgroundColor = "red";
    }
    calcAverage();
    // Calculating Average and assigning to proper cell

    // let idOfDiv = e.target.id;
    // let avgId = "avgOf" + idOfDiv;


    // let cols = document.getElementsByClassName("column");
    // let colsNumber = parseInt(cols.length, 10);


    // let numArray = [];
    // let idOfproperDiv = parseInt(parseInt(idOfDiv) + 1);
    // var arrSum = 0;

    // for (i = 0; i < colsNumber; i++) {


    //     let preciseColNum = cols[i];
    //     console.log(idOfproperDiv);
    //     let cellValue = parseInt(preciseColNum.childNodes[idOfproperDiv].textContent);

    //     numArray.push(cellValue);
    //     console.log(numArray);
    // }
    // for (i = 0; i < numArray.length; i++) {
    //     arrSum += parseInt(numArray[i], 10);
    // }
    // var arrAvg = (arrSum / numArray.length).toPrecision(2);
    // document.getElementById(avgId).textContent = arrAvg;

}

//#endregion Add mark and Change Color of MarkBox


//#endregion Add New Day

// #region Delete Day


const removeDay = document.querySelector('.container .mainDisplay .displayHeader #removeDay');
removeDay.addEventListener('click', function (e) {
    const day = document.getElementsByClassName("column"); // Gets all the Div-s with class name Column
    if (day.length > 0) {    // Checks if there are created any days, at least one
        const lastDay = document.querySelector('.markingSide').lastChild;  // Assigns last column to lastDay.
        lastDay.remove();   // Removes the last day

        if (date.getDay() == '1' || date.getDay() == '3' || date.getDay() == '5') { //Checks if day removed was Monday, Wednesday or Friday
            date.setDate(date.getDate() - 2);       // Changes the date to two days previous in order to be used in creation of new column
        }
        else if (date.getDay() == '6') {        //Checks if day removed was Saturday
            date.setDate(date.getDate() - 1);
        }
    }
    calcAverage();
});



// #endregion Delete Day



//#region Calculating average

function calcAverage() {
    let cols = document.getElementsByClassName("column");
    let colsNumber = parseInt(cols.length, 10);
    // let idOfDiv = 0;
    // let avgId = "avgOf" + idOfDiv;    
    let numArray = [];
    var arrSum = 0;
    for (id = 0; id < 15; id++) {
        idOfDiv = id;
        avgId = "avgOf" + idOfDiv;

        let idOfproperDiv = parseInt(parseInt(idOfDiv) + 1);

        for (i = 0; i < colsNumber; i++) {

            let cellValue = parseInt(cols[i].childNodes[idOfproperDiv].textContent);

            numArray.push(cellValue);
        }

        for (i = 0; i < numArray.length; i++) {
            arrSum += parseInt(numArray[i], 10);
        }

        var arrAvg = (arrSum / numArray.length).toPrecision(2);
        document.getElementById(avgId).textContent = arrAvg;

        if (colsNumber == 0) {
            document.getElementById(avgId).textContent = 0;
        }
    }
}


//#endregion Calculating average

//#region Update Statistics

function totalDaysCounter() {
    let cols = document.getElementsByClassName("column");
    let colsNumber = parseInt(cols.length, 10);
    let totalDays = parseInt(document.getElementById("totalDays").textContent);
    arrSum = 0;
    for (i = 0; i < colsNumber; i++) {
        let days = parseInt(cols[i].childNodes.length, 10);
        arrSum += days;
    }
    totalDays = arrSum - colsNumber;
    document.getElementById("totalDays").textContent = totalDays;
}

function missedLessonsCounter() {
    let cols = document.getElementsByClassName("column");
    let colsNumber = parseInt(cols.length, 10);
    let totalDays = parseInt(document.getElementById("totalDays").textContent);
    for (i = 0; i < colsNumber; i++) {
        let missedLessons = 0;
        let days = parseInt(cols[i].childNodes.length, 10);
        for (a = 0; a < days; a++){
            if(cols[i].childNodes[a].textContent == "0"){
                missedLessons += 1;
            }
        }
    }
    document.getElementById("totalDays").textContent = missedLessons;
}

//#endregion Update Statistics
