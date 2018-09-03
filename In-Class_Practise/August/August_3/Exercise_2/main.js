function generateNums() {
    let numNums = 150;
    for(i=1; i<=numNums; i++){
        $('#numbers').append(`<span> ${i} </span>`)
    }
}



let mainModule = (function(){
    
    let moduleStorage = window.localStorage;
    
    let shuffleBtn = $('#shuffleNum');
    let ascendingBtn = $('#byAscending');
    let descendingBtn = $('#byDescending');

    moduleStorage.setItem('currentNums', nums);
    
    
})





generateNums();
mainModule();