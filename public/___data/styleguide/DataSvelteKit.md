```js
// src/routes/products/[id]/+page.server.js
// move to $lib/server/db/+page.server.js
/*
return a promise in a nested object. 

Promises returned as a property at the root of the object are "awaited" while any promise that's nested is streamed to the client when the result is available.
*/
import { db } from '$lib/db.server'

export async function load({ params }) {
    const { id } = params

    return {
        // SvelteKit waits for query to resolve before rendering
        product: db.product.findUnique({ where: { id } }),

        // Streamed results
        streamed: {
            // query defered until after rendering
            reviews: db.review.findMany({
                where: { productId: id }
            })
        }
    }
}
```