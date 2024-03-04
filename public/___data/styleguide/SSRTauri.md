```javascript
// scr/hooks.js
// align the behavior of SvelteKit's dev mode with your SPA
export async function handle({ event, resolve }) {
    return resolve(event, { ssr: false });
}
// or use static adaptor to disable ssr?
```