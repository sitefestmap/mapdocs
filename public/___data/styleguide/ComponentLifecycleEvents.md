- `onMount` : Fetch API calls
- `onDestroy` : Remove Event Listeners to prevent memory leaks
- `beforeUpdate`
- `afterUpdate`

```svelte
<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    .element.addEventListener()
    
    // same as OnDestroy
    return () => {
      .element.removeEventListener()
    }
  })
</script>
```
