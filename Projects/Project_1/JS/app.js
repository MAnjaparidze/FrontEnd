// #region Add New Day
const marksList = document.querySelector('.container .mainDisplay .displayTable'); // Assigns the mark table to marksList
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
    column.classList.add('column');     // Assigns class 'column' to column div
    const date = document.createElement("div"); // Creating div for date
    date.setAttribute('id', 'date');    //Assigning id 'date' to div date
    var d = createDate();   

    // content
    date.textContent = d;           // Inputs date to be seen on display

    column.appendChild(date);       // Assigns date to column
    for (i = 1; i <= 15; i++) {         // Loop for creating 15 div elements for each student
        const markCell = document.createElement("div");
        markCell.setAttribute('id', i);
        markCell.classList.add('markCell');
        markCell.style.backgroundColor = 'red';
        markCell.textContent = 0;


        column.appendChild(markCell); // Appends divs to column
    }

    marksList.appendChild(column);      //Appends column to mark Table
});


//#endregion Add New Day

// #region Delete Day


const removeDay = document.querySelector('.container .mainDisplay .displayHeader #removeDay');
removeDay.addEventListener('click', function (e) {
    const day = document.getElementsByClassName("column"); // Gets all the Div-s with class name Column
    if (day.length > 0) {    // Checks if there are created any days, at least one
        const lastDay = document.querySelector('.displayTable').lastChild;  // Assigns last column to lastDay.
        lastDay.remove();   // Removes the last day

        if (date.getDay() == '1' || date.getDay() == '3' || date.getDay() == '5') { //Checks if day removed was Monday, Wednesday or Friday
            date.setDate(date.getDate() - 2);       // Changes the date to two days previous in order to be used in creation of new column
        }
        else if (date.getDay() == '6') {        //Checks if day removed was Saturday
            date.setDate(date.getDate() - 1);
        }
    }
});



// #endregion Delete Day

//#region Add mark and Change Color of MarkBox 

let marks = document.getElementsByClassName("markCell");
for (let i = 0; i < marks.length; i++){
    marks[i].addEventListener("click", function addMark(e){
        //Adding mark to a markCell
        console.log('Hi');
        let insertMark = prompt("Please enter a mark: ")
        if(insertMark >= 5){
            e.target.textContent = 5;
        }
        else if(insertMark < 5 && insertMark > 0){
            e.target.textContent = insertMark;
        }
        else {
            e.target.textContent = 0;
        }
        // End of Adding mark to a markCell
    
        //Changing Color to a div according to input
        if(e.target.textContent > "0"){
            e.target.style.backgroundColor = "green";
        }
    });
}

//#endregion Add mark and Change Color of MarkBox


//#region Calculating average



//#endregion Calculating average
