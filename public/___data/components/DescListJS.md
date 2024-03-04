```js
import VirtualList from 'svelte-virtual-list'

let searchTerm = ""
$: filteredList = items.filter(item => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
// (item.title.toLowerCase(),item.tags.toLowerCase())
//$: filteredList = items.filter(item => item.url.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

//	let end
//let start
// import items from 'src/routes/bookmarks/bookmarks.js'
export let items;
// let placeholder
```
