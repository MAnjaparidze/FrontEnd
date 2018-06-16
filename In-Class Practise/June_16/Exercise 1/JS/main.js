let login = prompt ("Please enter your Username");
if ( login == "Admin") {
    let password = prompt ("Please enter password");
    if (password == "TheMaster") {
        alert("Welcome");
    }
    else if (password == "") {
        alert("Canceled")
    }
    else {
        alert("Wrong password");
    }
}
else if ( login == "" ) {
    alert("Canceled");
}
else{
    alert("I don't know you");
}