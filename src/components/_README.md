- For in-build elements, there is just an ElementName.css file.
- Do as much CSS in elements/attributes ( no classes in element css files).
- Don't repeat elements as components ie A, Header, Footer, Heading etc.


"you should not clutter the class attribute of an HTML tag with 3000 Tailwind utility classes but rather actually only set your custom class name in the HTML tag and then put all Tailwind utility classes in the @apply ...; CSS at-directive in your custom CSS class block."