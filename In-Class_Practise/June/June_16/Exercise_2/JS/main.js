let year = prompt ("Please enter a year");
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    alert("Leap Year");
}
else {
    alert("Not Leap")
}