/**
 * WordPress dependencies
 */
import * as React from '@wordpress/element';
import {
	Toolbar as ToolbarControls,
	ToolbarButton,
} from '@wordpress/components';
import {
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/editor';
import { _x } from '@wordpress/i18n';
import type { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import { Attributes } from './types';

export const Toolbar = ( {
	attributes: { isVertical, beforeId, afterId },
	setAttributes,
}: BlockEditProps< Attributes > ) => (
	<BlockControls>
		<ToolbarControls>
			<ToolbarButton
				icon="image-flip-vertical"
				isPressed={ isVertical }
				onClick={ () => setAttributes( { isVertical: ! isVertical } ) }
				label={ _x(
					'Vertical Comparison',
					'text',
					'nelio-compare-images'
				) }
			/>

			{ !! beforeId && !! afterId && (
				<>
					<MediaUploadButton
						icon="format-image"
						value={ beforeId }
						onSelect={ ( id, url, alt ) =>
							setAttributes( {
								beforeId: id,
								beforeUrl: url,
								beforeAlt: alt,
							} )
						}
						label={ _x(
							'Change before image…',
							'command',
							'nelio-compare-images'
						) }
					/>

					<MediaUploadButton
						icon="format-gallery"
						value={ afterId }
						onSelect={ ( id, url, alt ) =>
							setAttributes( {
								afterId: id,
								afterUrl: url,
								afterAlt: alt,
							} )
						}
						label={ _x(
							'Change after image…',
							'command',
							'nelio-compare-images'
						) }
					/>
				</>
			) }
		</ToolbarControls>
	</BlockControls>
);

// =======
// HELPERS
// =======

type MediaUploadButtonProps = {
	readonly icon: 'format-gallery' | 'format-image';
	readonly label: string;
	readonly value?: number;
	readonly onSelect: ( id: number, url: string, alt: string ) => void;
};

const MediaUploadButton = ( {
	icon,
	label,
	onSelect,
	value,
}: MediaUploadButtonProps ) => (
	<MediaUploadCheck>
		<MediaUpload
			onSelect={ ( { id, url, alt } ) =>
				onSelect( id, url as string, alt as string )
			}
			allowedTypes={ [ 'image' ] }
			multiple={ false }
			value={ value }
			render={ ( { open } ) => (
				<ToolbarButton icon={ icon } onClick={ open } label={ label } />
			) }
		/>
	</MediaUploadCheck>
);
