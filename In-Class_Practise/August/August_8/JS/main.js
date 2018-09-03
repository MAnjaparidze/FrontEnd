// PCRE, *POSIX

// \n \t \r \v
// delimeters
// /abc/

// ?
// *
// +

let myStr = `Product-1 $13
             Produt-2 $27
             Product-3 $112`;

let myRe = /[$0-9]+/;
let result = myRe.exec(myStr);
let res = myStr.match(myRe);
console.log(res);


