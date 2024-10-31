/**
 * WordPress dependencies.
 */
import * as React from '@wordpress/element';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import { Attributes } from './types';

type SaveProps = {
	readonly className: string;
	readonly attributes: Attributes;
};

const SaveBlock = ( {
	attributes: {
		afterAlt,
		afterId,
		afterUrl,
		align = '',
		beforeAlt,
		beforeId,
		beforeUrl,
		caption = '',
		isVertical,
		dividerLocation,
	},
	className,
}: SaveProps ) => {
	const blockProps = useBlockProps.save( {
		className: classnames( 'wp-block-nelio-compare-images', className, {
			[ `align${ align }` ]: !! align,
		} ),
	} );

	return (
		<figure { ...blockProps }>
			{ !! beforeId && ! afterId && (
				<img
					className={ `wp-image-${ beforeId }` }
					src={ beforeUrl }
					alt={ beforeAlt }
				/>
			) }

			{ ! beforeId && !! afterId && (
				<img
					className={ `wp-image-${ afterId }` }
					src={ afterUrl }
					alt={ afterAlt }
				/>
			) }

			{ !! beforeId && !! afterId && (
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
					data-position={ dividerLocation }
					data-direction={ isVertical ? 'vertical' : 'horizontal' }
				>
					<div
						className={ classnames(
							'wp-block-nelio-compare-images__before-image',
							`wp-block-nelio-compare-images__before-image--${
								isVertical ? 'vertical' : 'horizontal'
							}`
						) }
					>
						<img
							className={ `wp-image-${ beforeId }` }
							src={ beforeUrl }
							alt={ beforeAlt }
						/>
					</div>

					<div
						className={ classnames(
							'wp-block-nelio-compare-images__after-image',
							`wp-block-nelio-compare-images__after-image--${
								isVertical ? 'vertical' : 'horizontal'
							}`
						) }
						style={ {
							height: isVertical
								? `${ 100 - dividerLocation }%`
								: undefined,
							width: ! isVertical
								? `${ 100 - dividerLocation }%`
								: undefined,
						} }
					>
						<img
							className={ `wp-image-${ afterId }` }
							src={ afterUrl }
							alt={ afterAlt }
						/>
					</div>

					<div
						className={ classnames(
							'wp-block-nelio-compare-images__divider',
							`wp-block-nelio-compare-images__divider--${
								isVertical ? 'horizontal' : 'vertical'
							}`
						) }
					></div>

					<div
						className={ classnames(
							'wp-block-nelio-compare-images__handler',
							`wp-block-nelio-compare-images__handler--${
								isVertical ? 'horizontal' : 'vertical'
							}`
						) }
					></div>
				</div>
			) }

			{ !! beforeId && !! afterId && ! RichText.isEmpty( caption ) && (
				<RichText.Content
					tagName="figcaption"
					className="wp-block-nelio-compare-images__caption"
					value={ caption }
				/>
			) }
		</figure>
	);
};

export default SaveBlock;
