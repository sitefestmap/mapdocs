```ts
const users = document.querySelectorAll('.user') as NodeListOf<HTMLElement>

const getElements = (selector: string) => {
    return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
}
```