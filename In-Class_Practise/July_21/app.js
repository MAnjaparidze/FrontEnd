// console.log(wow);
// console.log(window.wow);

let myWow = document.getElementById('wow');
myWow.style.padding = "20px";
myWow.style.backgroundColor = "red";
// console.log(myWow);

// getElementBy*

let divs = document.getElementsByTagName('div');
// console.log(divs.wow);
// console.log(divs); iterable
for (let div of divs) {
    // console.log(div);
}

let menus = document.getElementsByClassName('menu');
let arrMenus = Array.from(menus);
// console.log(menus);
for (let menu of menus) {
    // console.log(menu);
}

let ps = document.getElementsByName('p');
for(let key of ps.entries()){
    // console.log(key);
}
// querySelector|querySelectorAll

let elements = document.querySelectorAll("ul.menu > li:last-child");
elements.forEach( el => {
    el.style.backgroundColor = 'red';
    el.style.padding = '10px';
    el.style.color = '#fff';
    el.style.fontWeight = '900';
    console.log(el);
});

let element = document.querySelector("ul:last-of-type");
// console.log(element);

console.log(document.body.constructor.name);

console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);
