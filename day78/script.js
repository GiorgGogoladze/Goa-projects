// Get the container element
const container = document.getElementById('container');

// Get child nodes
const childNodes = container.childNodes;
console.log(childNodes); // Logs all child nodes (including text nodes, comments, etc.)

// Get the first child node
const firstChild = container.firstChild;
console.log(firstChild); // Logs the first child node (might be a text node if there are whitespace characters)

// Get the last child node
const lastChild = container.lastChild;
console.log(lastChild); // Logs the last child node

// Check if container has child nodes
const hasChildNodes = container.hasChildNodes();
console.log(hasChildNodes); // Logs true or false

// Get the next sibling of the first paragraph
const firstParagraph = document.getElementById('first');
const nextSibling = firstParagraph.nextSibling;
console.log(nextSibling); // Logs the next sibling node (might be a text node)

// Get the previous sibling of the second paragraph
const secondParagraph = document.getElementById('second');
const previousSibling = secondParagraph.previousSibling;
console.log(previousSibling); // Logs the previous sibling node (might be a text node)

// Get the parent node of the second paragraph
const parentNode = secondParagraph.parentNode;
console.log(parentNode); // Logs the parent node (the div with id="container")
