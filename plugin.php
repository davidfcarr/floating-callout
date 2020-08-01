<?php
/**
 * Plugin Name: Floating Callout
 * Plugin URI: https://github.com/davidfcarr/floating-callout
 * Description: Creates a Gutenberg block displayed float right or float left relative to other content. You may set padding, margins, background color or background image.
 * Author: davidfcarr
 * Author URI: https://www.carrcommunications.com
 * Version: 1.0.2
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
