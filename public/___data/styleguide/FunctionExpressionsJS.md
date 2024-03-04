```js
/**
 * Use function keyword as an expression to create a function value
 * Not hoisted, as this may cause confusion?
 */

const demo = function(value) {
  return !!value;
}
```