```js
// vite.config.js
// change dev port so can have multiple projects open
// next project will be 3003 / 3004
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3001,
		strictPort: false,
	},

	preview: {
		port: 3002,
		strictPort: false,
	}
};
```

```js
// svelte.config.js
import netlify from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.mjs'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		//adapter: adapter()
		adapter: netlify({ edge: true }), // solve devalue issue 6462

		alias: {
	   
			// this will match a directory and its contents
			// (`my-directory/x` resolves to `path/to/my-directory/x`)
			'$code': 'src/lib/components/code',
			'$components': 'src/lib/components',
			'$data' : 'src/lib/data'
	   
			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			//'my-directory/*': 'path/to/my-directory/*'
		  }
	},

	extensions: ['.svelte', '.svelte.md', '.md'],
	
	preprocess: [
		preprocess(),
		sveltePreprocess(),
		mdsvex(mdsvexConfig),
	],

	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: 'meta-shift', // [Shift] + [CMD]
				holdMode: true,
				showTogggleButton: 'always',
				toggleButtonPos: 'top-right'
			},
		},
	},
};

export default config;
```
