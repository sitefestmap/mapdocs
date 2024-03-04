---
title: 'PHP Closures'
backlinks: [
    { title: 'PHP', url: 'php'}
]
---

(Frontline PHP)

Short Closures have automatic access to the outer scope, and allow only a single epression which is automatically returned

```php
array_map)
    fn($x) => $x * $this->modifier
    $numbers
)
```

First Class Callables make a closure from a callable by calling that callable and passing it '...' as it's argument.

```php
function foo(int $a, int $b) { /* ... */}
    $foo = foo(...)
    $foo(a: 1, b: 2);
```