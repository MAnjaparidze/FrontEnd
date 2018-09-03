function generateHTML(count, tagName, selector, content = null, childCount = null, childTagName = null) {
    for (let i = 0; i < count; ++i) {
        let elementNode = document.createElement(tagName);
        let container = document.querySelector(selector);
        if (childCount == null) {
            let elementText = document.createTextNode(content);
            elementNode.appendChild(elementText);
        }
        for (let j = 0; j < childCount; ++j) {
            let childElementNode = document.createElement(childTagName);
            elementNode.appendChild(childElementNode);
            let elementText = document.createTextNode(content);
            childElementNode.appendChild(elementText);
        }
        container.appendChild(elementNode);
    }
}

generateHTML(2, 'p', '#container', "text Content");
generateHTML(5, 'ul', '#container', "text content wubaluba dub dub", 6, 'li');