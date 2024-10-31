/**
 * WordPress dependencies.
 */
import * as React from '@wordpress/element';
import {
	useBlockProps,
	MediaPlaceholder,
	RichText,
} from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';
import type { BlockEditProps } from '@wordpress/blocks';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import './editor.scss';
import { Attributes } from './types';
import { Inspector } from './inspector';
import { Toolbar } from './toolbar';

const EditBlock = ( props: BlockEditProps< Attributes > ) => (
	<>
		{ props.isSelected && <Inspector { ...props } /> }
		{ props.isSelected && <Toolbar { ...props } /> }
		<Images { ...props } />
	</>
);

export default EditBlock;

// =======
// HELPERS
// =======

const Images = ( props: BlockEditProps< Attributes > ) => {
	const {
		attributes: {
			beforeId,
			beforeUrl,
			afterId,
			afterUrl,
			isVertical,
			dividerLocation,
			caption,
		},
		className,
		isSelected,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: classnames( className, 'wp-block-nelio-compare-images' ),
	} );

	return (
		<div { ...blockProps }>
			<div
				className={ classnames(
					'wp-block-nelio-compare-images__comparison-wrapper',
					`wp-block-nelio-compare-images__comparison-wrapper--${
						isVertical ? 'vertically' : 'horizontally'
					}`,
					{
						'wp-block-nelio-compare-images__comparison-wrapper--is-image-missing':
							! beforeId || ! afterId,
					}
				) }
			>
				<Image
					mode="before"
					isVertical={ isVertical }
					imageId={ beforeId }
					imageUrl={ beforeUrl }
					onChange={ ( id, url, alt ) =>
						setAttributes( {
							beforeId: id,
							beforeUrl: url,
							beforeAlt: alt,
						} )
					}
				/>
				<Image
					mode="after"
					isVertical={ isVertical }
					dividerLocation={
						!! beforeId && !! afterId ? dividerLocation : undefined
					}
					imageId={ afterId }
					imageUrl={ afterUrl }
					onChange={ ( id, url, alt ) =>
						setAttributes( {
							afterId: id,
							afterUrl: url,
							afterAlt: alt,
						} )
					}
				/>
				{ !! beforeId && !! afterId && (
					<Handler
						isVertical={ isVertical }
						location={ dividerLocation }
					/>
				) }
			</div>
			{ !! beforeId && !! afterId && (
				<Caption
					text={ caption ?? '' }
					isSelected={ isSelected }
					onChange={ ( value ) =>
						setAttributes( { caption: value } )
					}
				/>
			) }
		</div>
	);
};

type ImageProps = {
	readonly mode: 'before' | 'after';
	readonly isVertical: boolean;
	readonly imageId?: number;
	readonly imageUrl?: string;
	readonly dividerLocation?: number;
	readonly onChange: ( id: number, url: string, alt: string ) => void;
};

const Image = ( {
	mode,
	isVertical,
	dividerLocation,
	imageId,
	imageUrl,
	onChange,
}: ImageProps ) => (
	<div
		className={ classnames(
			`wp-block-nelio-compare-images__${ mode }-image`,
			`wp-block-nelio-compare-images__${ mode }-image--${
				isVertical ? 'vertical' : 'horizontal'
			}`
		) }
		{ ...( 'after' === mode && {
			style: {
				height:
					isVertical && undefined !== dividerLocation
						? `${ 100 - dividerLocation }%`
						: undefined,
				width:
					! isVertical && undefined !== dividerLocation
						? `${ 100 - dividerLocation }%`
						: undefined,
			},
		} ) }
	>
		{ ! imageId ? (
			<MediaPlaceholder
				allowedTypes={ [ 'image' ] }
				multiple={ false }
				onSelect={ ( { id, url, alt } ) =>
					// TODO. Remove explicit casts.
					onChange( id, url as string, alt as string )
				}
				value={ imageId }
				labels={ {
					title: getTitle( mode ),
					instructions: _x(
						'Select an image…',
						'text',
						'nelio-compare-images'
					),
				} }
			/>
		) : (
			<img alt={ getTitle( mode ) } src={ imageUrl } />
		) }
	</div>
);

const Handler = ( {
	isVertical,
	location,
}: {
	isVertical: boolean;
	location: number;
} ) => (
	<>
		<div
			className={ classnames(
				'wp-block-nelio-compare-images__divider',
				`wp-block-nelio-compare-images__divider--${
					isVertical ? 'horizontal' : 'vertical'
				}`
			) }
			style={ {
				top: isVertical ? `calc(${ location }% - 0.5em)` : 0,
				left: ! isVertical ? `calc(${ location }% - 0.5em)` : 0,
			} }
		></div>

		<div
			className={ classnames(
				'wp-block-nelio-compare-images__handler',
				`wp-block-nelio-compare-images__handler--${
					isVertical ? 'horizontal' : 'vertical'
				}`
			) }
			style={ {
				top: isVertical ? `calc(${ location }% - 0.5em)` : undefined,
				left: ! isVertical ? `calc(${ location }% - 0.5em)` : undefined,
			} }
		></div>
	</>
);

const Caption = ( {
	text,
	isSelected,
	onChange,
}: {
	isSelected: boolean;
	text: string;
	onChange: ( text: string ) => void;
} ) => {
	if ( RichText.isEmpty( text ) && ! isSelected ) {
		return null;
	} //end if

	return (
		<RichText
			className="wp-block-nelio-compare-images__caption"
			tagName="figcaption"
			placeholder={ _x(
				'Write caption…',
				'user',
				'nelio-compare-images'
			) }
			value={ text }
			onChange={ onChange }
			inlineToolbar
		/>
	);
};

const getTitle = ( mode: 'before' | 'after' ) =>
	'before' === mode
		? _x( 'Before Image', 'text', 'nelio-compare-images' )
		: _x( 'After Image', 'text', 'nelio-compare-images' );
