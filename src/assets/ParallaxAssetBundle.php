<?php
/**
 * Created by PhpStorm.
 * User: gbisurgi
 * Date: 28.08.18
 * Time: 14:34
 */

namespace dmstr\parallax;

use yii\web\AssetBundle;

class ParallaxAssetBundle extends AssetBundle
{
    public $sourcePath = '@vendor/dmstr/yii2-parallax-asset/src/assets/web';

    public $js = [
        'js/parallax.js'
    ];
}