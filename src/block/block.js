/**
 * BLOCK: Wrapper
 */

import './style.scss';
import './editor.scss';
import Inspector from './inspector';
import classnames from 'classnames';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const blockAttributes = {
	position: {
		type: 'string',
		default: 'right',
	},
	width: {
		type: 'number',
		default: 50,
	},
	paddingTop: {
		type: 'number',
		default: 0,
	},
	paddingRight: {
		type: 'number',
		default: 10,
	},
	paddingBottom: {
		type: 'number',
		default: 10,
	},
	paddingLeft: {
		type: 'number',
		default: 10,
	},
	marginTop: {
		type: 'number',
		default: 0,
	},
	marginRight: {
		type: 'number',
		default: 0,
	},
	marginBottom: {
		type: 'number',
		default: 10,
	},
	marginLeft: {
		type: 'number',
		default: 10,
	},
	backgroundColor: {
		type: 'string',
		default: '#eeeeee',
	},
	backgroundImage: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
		default: 0,
	},
};

registerBlockType( 'floating-callout/wrapper', {
	title: __( 'Floating Callout', 'floating-callout' ),
	description: __( 'Create a block of text, aligned float: right or float: left. Add a background image or color, as well as padding and margins.', 'floating-callout' ),
	icon: 'editor-contract',
	category: 'common',
	keywords: [
		__( 'callout', 'floating-callout' ),
		__( 'sidebar', 'floating-callout' ),
		__( 'float', 'floating-callout' ),
	],
	attributes: blockAttributes,

	getEditWrapperProps() {
		return { 'data-align': 'full' };
	},

	edit: function( props ) {
		const { attributes, className } = props;

		const wrapperStyle = {
			paddingTop: attributes.paddingTop !== 0 ? attributes.paddingTop + 'px' : null,
			paddingRight: attributes.paddingRight !== 0 ? attributes.paddingRight + 'px' : null,
			paddingBottom: attributes.paddingBottom !== 0 ? attributes.paddingBottom + 'px' : null,
			paddingLeft: attributes.paddingLeft !== 0 ? attributes.paddingLeft + 'px' : null,
			marginTop: attributes.marginTop !== 0 ? attributes.marginTop + 'px' : null,
			marginBottom: attributes.marginBottom !== 0 ? attributes.marginBottom + 'px' : null,
			backgroundColor: attributes.backgroundColor,
			backgroundImage: attributes.backgroundImage && 'url(' + attributes.backgroundImage + ')',
			width: attributes.width !== 0 ? attributes.width + '%' : null,
		};

		const classes = classnames(
			className,
			dimRatioToClass( attributes.backgroundOpacity ),
			{
				'has-background-dim': attributes.backgroundOpacity !== 0,
			},
			attributes.position,
			'mce-content-body',
		);

		return (
			<Fragment>
				<Inspector { ...props } />
				<div class="callout-header"><strong>Floating Callout</strong> <small>(this placeholder not displayed outside the editor)</small></div>
				<div style={ wrapperStyle } className={ classes }>
					<div className="floating-callout">
						<div className="floating-callout-blocks" >
							<InnerBlocks />
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save: function( props ) {
		const { attributes, className } = props;

		const wrapperStyle = {
			paddingTop: attributes.paddingTop !== 0 ? attributes.paddingTop + 'px' : null,
			paddingRight: attributes.paddingRight !== 0 ? attributes.paddingRight + 'px' : null,
			paddingBottom: attributes.paddingBottom !== 0 ? attributes.paddingBottom + 'px' : null,
			paddingLeft: attributes.paddingLeft !== 0 ? attributes.paddingLeft + 'px' : null,
			marginTop: attributes.marginTop !== 0 ? attributes.marginTop + 'px' : null,
			marginBottom: attributes.marginBottom !== 0 ? attributes.marginBottom + 'px' : null,
			backgroundColor: attributes.backgroundColor,
			backgroundImage: attributes.backgroundImage && 'url(' + attributes.backgroundImage + ')',
			width: attributes.width !== 0 ? attributes.width + '%' : null,
		};

		const classes = classnames(
			className,
			dimRatioToClass( attributes.backgroundOpacity ),
			{
				'has-background-dim': attributes.backgroundOpacity !== 0,
			},
			attributes.position
		);

		return (
			<div style={ wrapperStyle } className={ classes }>
				<div className="floating-callout">
					<div className="floating-callout-blocks" >
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},

} );

function dimRatioToClass( ratio ) {
	return ( ratio === 0 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}
