let body = document.querySelector('.container');

let saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', function showInfo() {
    // getInfo
    document.getElementById("loading").style.visibility = "visible";
    setTimeout(function(){
        let day = document.getElementById("day").value;
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let city = document.getElementById("city").value;
        let about = document.getElementById("about").value;
    
    // AssignInfo
    document.getElementById("birthDay").innerHTML = day;
    document.getElementById("birthMonth").innerHTML = month;
    document.getElementById("birthYear").innerHTML = year;
    document.getElementById("livingPlace").innerHTML = city;
    document.getElementById("aboutYou").innerHTML = about;
    
    // ShowImg
    document.getElementById("img").style.visibility = "visible";

    document.getElementById("loading").style.visibility = "hidden";
    }, 3000);
})



