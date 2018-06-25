function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
        return true;
    }
    else { return false; }
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));