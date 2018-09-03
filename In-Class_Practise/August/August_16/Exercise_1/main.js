let btn = document.querySelector('#count');

btn.addEventListener('click', function () {
    let text = document.querySelector('#textField');
    let words = text.value.split(/\b\W+\b/).length;
    let sentences = text.value.replace(/([.?!])\s*(?=[A-Z])/gi, "$1|").split("|").length;
    let numbers = text.value.replace(/[^0-9]/g, "").length;
    let lines = text.value.split(/\r\n|\r|\n/).length;
    let letters = text.value.match(/[a-z]/gi).length;
    
    console.log(`Sentence: ${sentences} Words: ${words} Numbers: ${numbers} Lines: ${lines} Letters: ${letters}`)
});