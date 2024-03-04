```js
// This input(the parameters) produces this result(The body)
() => { code; }

/* Traditional version */
function y() {
  return x + 1;
}

x = 6;
y = () => x * 7;

document.body.innerHTML = y(); // svelte bind result to vars

const materials = ['wood', 'plastic', 'stone']

materials.map(material => material.length)
```
