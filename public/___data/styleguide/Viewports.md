- Desktop Viewport = layout, visual, ideal.
- Ideal = Mobile
- The viewport is the Initial Containing Block that CSS Viewport units are used relative to.
- Desktop is equal to the window width;
- When you zoom in the viewport becomes smaller, as less CSS Pixels fit on the screen.
- Mobile Viewport is 768-1024px wide depending on browser, 980x the most common. This is the [[Layout Viewport]]
- Responsive Design overrides the default width of the layout viewport. This is called  the Visual Viewport
- The Desktop viewport has been split into the Layout Viewport and the Visual Viewport, and on Mobile, the Ideal Viewport

```html
<head>
    <!-- Meta Viewport -->
    <!-- To Create Responsive Design -->
    <!--Set the layout viewport dimensions to the ideal viewport dimensions -->   
    <meta name="viewport" content= "width=device-width">
    <!-- Same thing -->
    <meta name="viewport" content= "initial-scale= 1">
    <!-- 1 = 100% of zoom level of the ideal viewport; -->
    <meta name="viewport" content= >
    <meta name="viewport" content= "width=device-width, initial-scale= 1">
</head>
```

```js
// Layout Viewport
let layoutViewportWidth = document.documentElement.clientWidth;
let layoutViewportHeight = document.documentElement.clientHeight;

// Visual Viewport
let visualViewportWidth = window.innerWidth;
let visualViewportHeight = window.innerHeight;
```