/**
 * WordPress dependencies
 */
import { registerBlockType, BlockConfiguration } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './style.scss';
import metadata from './block.json';
import edit from './edit';
import save from './save';

registerBlockType( metadata as BlockConfiguration, {
	edit,
	save,
} );
