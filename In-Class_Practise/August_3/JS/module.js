// ( function(x, y){
//     'use strict';
//     console.log(x, y);

// })(1, 3);

let myModule = (function () {
    // myModule code
    let _privateVar = 'Hello World from Module';
    let publicProperty = 'This is a public property';

    function _privateMethod() {
        console.log(_privatevar);
    }
    function publicMethod(){
        _privateMethod();
    }
    return {
        publicMethod,
        publicProperty,
    }
}());

myModule.publicMethod();
console.log(myModule._privateVar);
// myModule._privateMethod();
console.log(_privateMethod());

