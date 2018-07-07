function showSomething(title = "Untitled", width = 200, height = 200, items = []){
    console.log(`title = ${title}, width = ${width}, height = ${height}`, items);
}

let options = {
    title: "My Title",
    items: ['item1', 'item2'],
}

function showSomethingV2({title = "Untitled", width = 200, height = 200, items = []}) {
    console.log(`title = ${title}, width = ${width}, height = ${height}`, items);
}

showSomething("My Title", 150, 300, ['item1', 'item2']);
showSomethingV2(options);