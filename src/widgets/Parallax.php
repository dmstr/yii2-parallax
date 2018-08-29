<?php
/**
 * @link http://www.diemeisterei.de/
 * @copyright Copyright (c) 2018 diemeisterei GmbH, Stuttgart
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace dmstr\parallax\widgets;

use dmstr\helpers\Html;
use dmstr\parallax\ParallaxAssetBundle;
use yii\base\Widget;

/**
 * Widget to create a parallax effect
 *
 * @package dmstr\parallax\widgets
 * @author Elias Luhr <e.luhr@herzogkommunikation.de>
 *
 * --- PROPERTIES ---
 *
 * @property double x horizontal movement
 * @property double y vetical movement
 *
 * @property string startCondition Either 'visible' or 'asap'
 * 
 * @property array options HTML attributes for parallax widget
 */
class Parallax extends Widget
{

    const START_CONDITION_VISIBLE = 'visible';
    const START_CONDITION_ASAP = 'asap';

    public $x = 0.0;
    public $y = 0.0;
    public $startCondition = self::START_CONDITION_ASAP;
    public $options = [];

    public function init() {
        ParallaxAssetBundle::register($this->view);

        parent::init();
        ob_start();
    }

    /**
     * @return string
     */
    public function run()
    {
        // apply defined values
        $this->options['data-parallax'] = "{$this->x}, {$this->y}, {$this->startCondition}";

        return Html::tag('div',ob_get_clean(),$this->options);
    }

}