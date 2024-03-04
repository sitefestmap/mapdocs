```css
/* The aspect ratio of the content-box, or the border-box, if `box-sizing: border-box` is declared. */

video {
  width: 100%;
  aspect-ratio: 16/9;
}

.aspect-ratio-gallery li {
  aspect-ratio: var(--aspect-ratio);
}

@supports not (aspect-ratio: 1) {
  .aspect-ratio-gallery li {
    height: max(25vh, 15rem);
  }
}
```