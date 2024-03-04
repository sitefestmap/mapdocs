Used for running Parallel code in JavaScript.

```js
// Use a single symbol to represent multiple types.
var worker = new Worker('my-worker.js');

worker.onMessage(function(event) {
    console.log(event.data);
});
```