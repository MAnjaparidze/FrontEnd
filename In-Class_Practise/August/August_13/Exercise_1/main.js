let dateRegEx = /^(\d{1,2}-){2}\d{2}(\d{2})?$/

console.log(dateRegEx.text('13-08-2018'));
console.log(dateRegEx.text('13-08-18'));
console.log(dateRegEx.text('13-8-18'));