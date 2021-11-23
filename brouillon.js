const domContainer = document.getElementById('container');

// Clear the tree
domContainer.innerHTML = '';

// Create the new host instance tree
const domNode = document.createElement('button');
domNode.className = 'red';
domContainer.appendChild(domNode);

// <button className="blue" />
// <button className="red" />

/*
<div className="before" title="stuff" />
<div className="after" title="stuff" />
*/

/*
<div style={{color: 'red', fontWeight: 'bold'}} />
<div style={{color: 'green', fontWeight: 'bold'}} />
*/

/*
// First render
  <dialog>
    <input />
  </dialog>

// Second render
  <dialog>
   <p>I was just added here!</p>
   <input />
  </dialog>

let oldInputNode = dialogNode.firstChild;
dialogNode.removeChild(oldInputNode);

let pNode = document.createElement('p');
pNode.textContent = 'I was just added here!';
dialogNode.appendChild(pNode);

let newInputNode = document.createElement('input');
dialogNode.appendChild(newInputNode);

<input> hasn’t been replaced with <p> — it just moved. We don’t want to lose its selection, focus state, and content due to re-creating the DOM.

// First optimization
let inputNode = dialogNode.firstChild;
let pNode = document.createElement('p');
pNode.textContent = 'I was just added here!';
dialogNode.insertBefore(pNode, inputNode);

*/

/*
<ul>
  <li>first</li>
  <li>second</li>
</ul>

First optimization :
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

*/

/*
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)

const element = React.createElement(
 "h1",
 { title: "foo" },
 "Hello"
)

const element = {
 type: "h1",
 props: {
   title: "foo",
   children: "Hello",
 },
}

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

const container = document.getElementById("root")
node.appendChild(text)
container.appendChild(node)

*/

/*
const somme = (x, y) => x + y

function somme(x, y) {
  return x + y
}
*/
// bundle
// chunck
