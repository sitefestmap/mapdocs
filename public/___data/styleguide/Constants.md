```svelte
<script>
    // Create read-only Variables Constants that can only be pointed to one value throughout a program.
    // Prevents Variable Reassignment but does not prevent Object Mutation.

    const demoVar = 'I am a value that will not change';
</script>

<style lang=scss>
    // variable that doesn't vary 
    $myConstantValue
</style>
```