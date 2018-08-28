Yii2 Parallax Asset
===================
A vanilla javascript library to create AWESOME parallax effects.

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require --prefer-dist dmstr/yii2-parallax-asset "*"
```

or add

```
"dmstr/yii2-parallax-asset": "*"
```

to the require section of your `composer.json` file.


Usage
-----

1. Register desired asset bundle in view
2. Set the x and y velocities and directions in the data-parallax attribute.
3. Scroll to see the AWESOME effect.

[data-parallax="{x}, {y}"]

Example

```html
<div data-parallax="0.2, -0.2"></div>
```

TIP: try it with css transitions tue create nicer effect.