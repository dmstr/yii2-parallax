<?php
/**
 * Created by PhpStorm.
 * User: gbisurgi
 * Date: 28.08.18
 * Time: 14:34
 */

namespace dmstr\parallax\assets;

use yii\web\AssetBundle;

/**
 * Class ParallaxAssetBundle
 * @package dmstr\parallax\assets
 * @author Elias Luhr <e.luhr@herzogkommunikation.de>
 */
class ParallaxAssetBundle extends AssetBundle
{
    public $sourcePath = '@vendor/dmstr/yii2-parallax/src/assets/web';

    public $js = [
        'js/parallax.js'
    ];
}