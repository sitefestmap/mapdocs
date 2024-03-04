```svelte
<div class="card">
    <h2>{item.title}</h2>
    <li> 
        <ul>
            {#each item.links as link}
                <li>
                    <img src="/link-favicons/{link.icon}" alt=""/>
                    <a href="{link.url}" target="_blank" rel="noreferrer">
                        <span class="title">{link.title}</span>
                        {#if link.src}
                            <span class="author">({link.src})</span>
                        {/if}
                        <!-- <span class="tags"> {item.tags}</span> -->
                    </a>
                </li>
            {/each}
        </ul>
    </li>
</div>
```
