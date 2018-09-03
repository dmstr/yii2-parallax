Yii2 Parallax
===================
An extention to create AWESOME parallax effects.

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require --prefer-dist dmstr/yii2-parallax "*"
```

or add

```
"dmstr/yii2-parallax": "*"
```

to the require section of your `composer.json` file.


Usage
-----

1. Register desired asset bundle in view
2. Set the x and y  to define direction and velocity. An extra optional parameter
(startCondition) tells the element when it should start moving. use "asap" to move the element
as soon as the scroll event fires. Use "visible" (default value) for those elements
that should move as soon they become visible in the viewport.
3. Scroll to see the AWESOME effect.

[data-parallax="{x}, {y}, {when}"]

Example with 3 parallax elements

```html
<div data-parallax="0.2, -0.2, asap"></div>
<div data-parallax="0.2, -0.2, visible"></div>
<div data-parallax="0.2, -0.2"></div>
```

* TIP: try it with css transitions on transform to create nicer effect.
* TIP: to make realistic parallax effects, closer (alsor bigger) elements should
move faster than elements tha are farther (also smaller).

Example widget usage

```php
<?php Parallax::begin(['x' => 0.1, 'y' => -0.2, , 'startCondition' => 'visible']); ?>
<?= '... some content' ?>
<?php Parallax::end(); ?>
```
