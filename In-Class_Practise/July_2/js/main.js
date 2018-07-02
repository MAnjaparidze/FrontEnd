


let textarea = document.createElement('textarea');
// data-*
document.body.appendChild(textarea);

let br = document.createElement('br');
document.body.insertBefore(br, textarea);

// console.log(a.attributes);
let atts = Array.from(a.attributes);

atts.forEach((attr) => {
    console.log(`${attr.nodeName}=${attr.nodeValue}`)
})

textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);
textarea.style.resize = 'none';
// display: block | none
// .hode, .show
// console.log(textarea.getAttribute('style'));

// className, classList

// console.log(a.className)
// a.className += ' a-style';
// console.log(a.classList);

// console.log(a.classList.item(0));
// a.classList.add('a-style');
console.log(a.contains('a-style'));
// console.log(a.dataset.cartId);
a.dataset.count = 0;
// let count = 0;
a.addEventListener('click', ({event}) => {
    let count = parseInt(event.target.dataset.count);
    if( !(count <= 4)) {
        event.preventDefault();
        event.target.dataset.count = count + 1;
    }
    
    // event.preventDefault();
    a.classList.toggle('a-style');
});
