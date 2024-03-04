```ts
// Total TypeScript
interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Post[]; // turn into array
    // alternative : Generic type
    // posts: Array<Post>  // array of Posts
}

interface Post {
    id: number;
    title: string;
}

export const defaultUser: User = {
    id: 1,
    firstName: "Matt",
    lastName: "Weston",
    role: "admin",
    posts: [
        {
            id: 1,
            title: "blah"
        },
        {
            id: 2,
            title: "blah blah"
        },
    ],
};
```
