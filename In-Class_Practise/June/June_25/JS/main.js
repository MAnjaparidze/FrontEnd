let str = "my string example";

// // console.log(str.inculdes('my'));

// console.log(str.startsWith('my'));
// console.log(str.endsWith('example'));

// let arr = [1,2,3];
// let clone = arr.slice();

// console.log(clone === arr);

// let sliced = str.slice(0, 3);
// console.log(`sliced - ${sliced.trim()}`);

// let subString = str.substring(0, 6);
// console.log(`substring - ${subString}`);

// let subStr = str.substr(0, 3);
// console.log(`subStr - ${subStr}`);

/*

DOCUMENT_NODE - window.document/document
ELEMENT_NODE - <body> <a> <p> ...
ATTRIBUTE_NODE - class="ohoo"
TEXT_NODE - ნებისმიერი დაშორება ფაილში.
DOCUMENT_TYPE_NODE - <!Doctype html>
DOCUMENT_FRAGMENT_NODE - document.createDocumentFragment()

*/

console.log(Node.ELEMENT_NODE);
console.log(Node.ATTRIBUTE_NODE);
console.log(Node.TEXT_NODE);

// OBJECT > Node > Element > HTML*Element

// HTML AnchorElement
let nodeAnchor = document.querySelector('a');
let props =  [];
for( let key in nodeAnchor ) {
    props.pish(key);
}

console.log(props.sort());

/* 

Node Properties:

    childNodes
    firstChild
    lastChild
    nextSibling
    nodeName
    nodeType
    nodeValue
    parentNode

Node Methods:
    appendChild(node)
    cloneNode()
    contains(node)
    hasChildNodes()
    insertBefore(node)
    isEqualNode()
    removeChild(node)
    replaceChild(node)

Document Methods:
    document.createElement('tag')
    document.createTextNode('string')

HTML*Element Properties:
    innerHTML
    outerHTML
    textContent
    innerText
    outerText
    firstElementChild
    lastElementChild
    previousElementChild
    children
*/

let div = document.createElement('div');
let text = document.createTextNode('Text node example');
div.appendChild(text);

document.body.appendChild(div);

// **********DOM ELEMENT SELECTION**********

// document.querySelecto('css selector!!!!')
// document.querySelectorAll('css selector!!!!');

// document.getElementById();

// let menuItem = document.getElementById('menu');
// console.log(menuItem);

let menus = document.getElementsByClassName('menu');
let menus2 = document.querySelectorAll('.menu')
let menusArray = Array.from(menus2);
// console.log(menus);
// console.log(menus2)
// console.log(menusArray);

let menuItem = document.querySelector('a');
console.log(menuItem.matches('#menu'));


