/**
 * WordPress dependencies.
 */
import * as React from '@wordpress/element';
import {
	ExternalLink,
	TextareaControl,
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/editor';
import { _x } from '@wordpress/i18n';
import type { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import { Attributes } from './types';

export const Inspector = ( {
	attributes: { afterAlt, beforeAlt, dividerLocation },
	setAttributes,
}: BlockEditProps< Attributes > ) => (
	<InspectorControls>
		<PanelBody
			initialOpen={ true }
			title={ _x( 'Settings', 'text', 'nelio-compare-images' ) }
		>
			<RangeControl
				label={ _x(
					'Divider’s Initial Location',
					'text',
					'nelio-compare-images'
				) }
				initialPosition={ dividerLocation }
				value={ dividerLocation }
				onChange={ ( value ) =>
					setAttributes( { dividerLocation: value } )
				}
				min={ 1 }
				max={ 99 }
			/>

			<TextareaControl
				label={ _x(
					'Before Image - Alt Text (Alternative Text)',
					'text',
					'nelio-compare-images'
				) }
				value={ beforeAlt || '' }
				onChange={ ( value ) => setAttributes( { beforeAlt: value } ) }
			/>

			<TextareaControl
				label={ _x(
					'After Image - Alt Text (Alternative Text)',
					'text',
					'nelio-compare-images'
				) }
				value={ afterAlt || '' }
				onChange={ ( value ) => setAttributes( { afterAlt: value } ) }
				help={
					<>
						<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
							{ _x(
								'Describe the purpose of the images',
								'user',
								'nelio-compare-images'
							) }
						</ExternalLink>
						{ _x(
							'Leave empty if they’re purely decorative.',
							'user',
							'nelio-compare-images'
						) }
					</>
				}
			/>
		</PanelBody>
	</InspectorControls>
);
