function doAsync(){
    let p = new Promise( function(resolve, reject){
        console.log("in promise code");
        setTimeout(function(){
            // console.log("Resolving");
            console.log('Rejecting');
            // resolve();
            reject();
        }, 2000);
    });
    return p;
}

// let promise = doAsync();
// doAsync().then(function(){
//     console.log('Fulfilled');
//     return ["Aaa"];
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch(function(error){
//     console.log(error.message);
// })