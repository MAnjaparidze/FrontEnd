var t;
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function stopTime() {
    let value = document.getElementById('inputField').value;
    setTimeout(function () { clearTimeout(t) }, value * 1000);
})
startTime();