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
2. Set the x and y  to define direction and velocity. An extra optional parameter
(when) tells the element when it should start moving. use "asap" to move the element
as soon as the scroll evevent fires. Use visible (default value) for those elements
that should move as soon they are visible in the viewport.
3. Scroll to see the AWESOME effect.

[data-parallax="{x}, {y}, {when}"]

Example with 3 parallax elements

```html
<div data-parallax="0.2, -0.2, asap"></div>
<div data-parallax="0.2, -0.2, visible"></div>
<div data-parallax="0.2, -0.2"></div>
```

TIP: try it with css transitions to create nicer effect.
TIP: to make a realistic parallax move closer (alsor bigger) elements faster than
elements tha are farther (also smaller)