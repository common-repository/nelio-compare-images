<?php
/**
 * The plugin bootstrap file
 *
 * @wordpress-plugin
 * Plugin Name: Nelio Compare Images Block
 * Plugin URI:  https://neliosoftware.com
 * Description: Before & After Image Block for Gutenberg.
 * Version:     1.0.5
 *
 * Author:            Nelio Software
 * Author URI:        http://neliosoftware.com
 * License:           GPL-3.0+
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * Text Domain:       nelio-compare-images
 *
 * @package Nelio_Compare_Images
 * @author  David Aguilera <david.aguilera@neliosoftware.com>
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}//end if

define( 'NELIO_COMPARE_IMAGES', true );

function nelioci_path() {
	return untrailingslashit( plugin_dir_path( __FILE__ ) );
}//end nelioci_path()

function nelioci_register_block_types() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}//end if
	register_block_type( nelioci_path() . '/build/block.json' );
}//end nelioci_register_block_types()
add_action( 'init', 'nelioci_register_block_types' );
