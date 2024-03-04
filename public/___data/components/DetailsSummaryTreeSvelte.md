```svelte
<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="tree" role="list">
    <li>
        <details open>
            <summary>{mainSummary}</summary>
            <ul role="list">
                <li>
                    <details>
                        <summary>Summary</summary>
                        <ul role="list">
                            <li>List</li>
                            <li>List</li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Summary</summary>
                        <ul role="list">
                            <li>List</li>
                            <li>List</li>
                        </ul>
                    </details>
                </li>
            </ul>
        </details>
    </li>
</ul>

<style>

.tree {
    --spacing: 1.5rem;
    --radius: 10px;
}

.tree li {
    display: block;
    position: relative;
    padding-left: calc(2 * var(--spacing) - var(--radius) - 2px);
}

.tree ul {
    margin-left: calc(var(--radius) - var(--spacing));
    padding-left: 0;
} 

.tree ul li {
    border-left: 2px solid #ddd;
    border-left: 2px solid var(--theme-colors-comment);
}

.tree ul li:last-child {
    border-color: transparent;
}

.tree ul li::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(var(--spacing) / -2);
    left: -2px;
    width: calc(var(--spacing) + 2px);
    height: calc(var(--spacing) + 1px);
    border: solid #ddd;
    border: solid var(--theme-colors-comment);
    border-width: 0 0 2px 2px;
}

.tree summary {
    display: block;
    cursor: pointer;
}

.tree summary::marker,
.tree summary::-webkit-details-marker {
    display: none;
}

.tree summary:focus {
    outline: none;
}

.tree summary:focus-visible {
    outline: 1px dotted #000;
    outline: 1px dotted var(--theme-colors-text);
}

.tree li::after,
.tree summary::before {
    content:'';
    display: block;
    position: absolute;
    top: calc(var(--spacing) / 2 - var(--radius));
    left: calc(var(--spacing) - var(--radius) - 1px);
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));
    border-radius: 50%;
    background: #ddd;
    background: var(--theme-colors-comment);
}

.tree summary::before {
    content: '+';
    z-index: 1;
    background: #696;
    background: var(--theme-colors-string);
    color: var(--theme-colors-background);
    line-height: calc(2 * var(--radius) - 2px);
    text-align: center;
}

.tree details[open] > summary::before {
    content: '-'
}
</style>
```