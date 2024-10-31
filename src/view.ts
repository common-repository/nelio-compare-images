// =====
// TYPES
// =====

type Direction = 'horizontal' | 'vertical';

type DragStatus =
	| {
			readonly isDragging: false;
	  }
	| {
			readonly isDragging: true;
			readonly afterImage: HTMLElement;
			readonly block: HTMLElement;
			readonly direction: Direction;
			readonly divider: HTMLElement;
			readonly handler: HTMLElement;
	  };

// =====
// STATE
// =====

let dragging: DragStatus = { isDragging: false };

// =======
// HELPERS
// =======

function fixSliders() {
	const blocks = Array.from(
		document.querySelectorAll< HTMLElement >(
			'.wp-block-nelio-compare-images__comparison-wrapper'
		)
	);
	blocks.forEach( ( block ) => {
		const position = getPosition( block );
		const direction = getDirection( block );

		dragStart( direction, block );
		if ( 'horizontal' === direction ) {
			dragHorizontally( position );
		} else {
			dragVertically( position );
		} //end if
		dragEnd();
	} );
} //end fixSliders()

function addDragListeners( direction: Direction ): void {
	const blocks = Array.from(
		document.querySelectorAll< HTMLElement >(
			`.wp-block-nelio-compare-images__comparison-wrapper--${ direction }ly`
		)
	);
	blocks.forEach( ( block ) => {
		const handler = block.querySelector< HTMLElement >(
			'.wp-block-nelio-compare-images__handler'
		);
		if ( ! handler ) {
			return;
		} //end if
		handler.addEventListener( 'mousedown', () =>
			dragStart( direction, block )
		);
		handler.addEventListener( 'touchstart', () =>
			dragStart( direction, block )
		);
		block.addEventListener( 'mousemove', ( ev: MouseEvent ) =>
			maybeDrag( ev, block )
		);
		block.addEventListener( 'touchmove', ( ev: TouchEvent ) =>
			maybeDrag( ev, block )
		);
	} );
} //end addDragListeners()

function dragStart( direction: Direction, block: HTMLElement ): void {
	const handler = block.querySelector< HTMLElement >(
		'.wp-block-nelio-compare-images__handler'
	);
	const divider = block.querySelector< HTMLElement >(
		'.wp-block-nelio-compare-images__divider'
	);
	const afterImage = block.querySelector< HTMLElement >(
		'.wp-block-nelio-compare-images__after-image'
	);

	if ( ! handler || ! divider || ! afterImage ) {
		return;
	} //end if

	dragging = {
		afterImage,
		block,
		direction,
		divider,
		handler,
		isDragging: true,
	};
} //end dragStart()

function dragEnd(): void {
	dragging = { isDragging: false };
} //end dragEnd()

function maybeDrag( ev: MouseEvent | TouchEvent, block: HTMLElement ): void {
	if ( ! dragging.isDragging ) {
		return;
	} //end if

	if ( block !== dragging.block ) {
		return;
	} //end if

	const rect = block.getBoundingClientRect();
	const clientX = isMouseEvent( ev )
		? ev.clientX
		: ev.targetTouches[ 0 ].clientX;
	const clientY = isMouseEvent( ev )
		? ev.clientY
		: ev.targetTouches[ 0 ].clientY;
	const x = ( clientX - rect.left ) / rect.width;
	const y = ( clientY - rect.top ) / rect.height;

	if ( 'horizontal' === dragging.direction ) {
		dragHorizontally( Math.max( 0, Math.min( 1, x ) ) * 100 );
	} else {
		dragVertically( Math.max( 0, Math.min( 1, y ) ) * 100 );
	} //end if
} //end maybeDrag()

function dragHorizontally( position: number ) {
	if ( ! dragging.isDragging ) {
		return;
	} //end if
	dragging.afterImage.style.width = `${ fixed( 100 - position ) }%`;
	dragging.divider.style.left = `${ fixed( position ) }%`;
	dragging.handler.style.left = `${ fixed( position ) }%`;
} //end dragHorizontally()

function dragVertically( position: number ) {
	if ( ! dragging.isDragging ) {
		return;
	} //end if
	dragging.afterImage.style.height = `${ fixed( 100 - position ) }%`;
	dragging.divider.style.top = `${ fixed( position ) }%`;
	dragging.handler.style.top = `${ fixed( position ) }%`;
} //end dragVertically()

function domReady( callback: () => void ) {
	if ( typeof document === 'undefined' ) {
		return;
	} //end if

	if (
		document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
		document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
	) {
		return void callback();
	} //end if

	// DOMContentLoaded has not fired yet, delay callback until then.
	return document.addEventListener( 'DOMContentLoaded', callback );
} //end domReady()

const isMouseEvent = ( ev: MouseEvent | TouchEvent ): ev is MouseEvent =>
	'clientX' in ev;

const fixed = ( n: number ) => n.toFixed( 2 );

const getPosition = ( b: HTMLElement ): number =>
	parseInt( b.getAttribute( 'data-position' ) ?? '0' ) || 0;

const getDirection = ( b: HTMLElement ): Direction =>
	'horizontal' === b.getAttribute( 'data-direction' )
		? 'horizontal'
		: 'vertical';

// =====
// START
// =====

domReady( () => {
	fixSliders();
	document.addEventListener( 'mouseup', () => dragEnd() );
	document.addEventListener( 'touchend', () => dragEnd() );
	addDragListeners( 'horizontal' );
	addDragListeners( 'vertical' );
} );
