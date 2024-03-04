```php
// Front-line PHP 
// Make your own by tagging a class 
#[Attribute]
class ListensTo
{
    public string $event;

    public function __construct(string $event)
    {
        $this->event = $event;
    }
}
```

Add to properties, anonymouse classes, functions, constants, closures, function arguments.

```php
#[
    Route(Http::POST, '/products/create'),
    Autowire,
]
class ProductesCreateController
{
    public function __invoke() { /* ... */}
}
```

Use reflection to get them, pass in optional arguments to `getAttributes` to filter the result

```php
$attributes = $reflectionClass->getAttributes(
    ContainerAttribute::class,
    ReflectionAttribute::IS_INSTANCEOF
);
```