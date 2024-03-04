```php
class MyClass {
    public static $myVar = 42;

    public static function myMethod() {
        return "Hello, World!";
    }
}

// call static prop
$value = MyClass::$myVar;

// Call static method
$message = MyClass::myMethod();
```
