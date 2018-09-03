$(document).ready( function(){
    // $('h1').myPlugin();
    // $('h1').myPlugin2();
    $('h1')
        .styleElement({
            text: 'Hello Plugin',
            color: 'green',
            fontSize: '20px',
            backgroundColor: '#ccc'
        });

    let worker = new Worker('js/work.js');
    worker.postMessage('Hello my Worker!...');
    worker.terminate();
    worker.addEventListener('message', (event) => {
        console.log(event.data);
        
    })
});