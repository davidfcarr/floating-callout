/**
 * BLOCK: floating-callout
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { InnerBlocks } from '@wordpress/editor';

import {
  ColorPalette,
  InspectorControls
} from '@wordpress/blocks'
import {
  BaseControl
} from '@wordpress/components'

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const attributes = {
     // Parsed automatically from hidden JSON literal block comments in the post_content
    textColor: {
      type: 'string'
    },
	width: { 
	type: 'string',
	default: '50',
}
  }
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-floating-callout', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'floating-callout - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Floating Callout' ),
		__( 'Add a promotional callout, 30% to 50% of content width, float right' ),
		__( 'callout, sidebar, float' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-floating-callout'></p>.
const { isSelected, attributes, setAttributes } = props;
	const { textColor, width } = attributes;
/*		
		function calloutInspector() {
			return ( <InspectorControls>
        <div>
          <h2>{__('Text Color', 'example')}</h2>
          <BaseControl>
            <ColorPalette 
              value={textColor}
              onChange={(textColor) => setAttributes({ textColor })} />
            </BaseControl>
        </div>
      </InspectorCon0ols>
);		}
*/	
	
		return (
	<div class="calloutwrapper"><div class="calloutheader">Click here to focus on callout sidebar content.
	<form>
	<select onChange={(width) => setAttributes({width})} defaultValue={width}>
	<option value="50">50%</option>
	<option value="45">45%</option>
	<option value="40">40%</option>
	<option value="35">35%</option>
	<option value="35">35%</option>
</select>
	</form>
	</div>
			<div className={ props.className } style={{width: width.value + '%'}}>
				<InnerBlocks />
			</div>
</div>
		);
	},

	/**
	<form>
	<input type="text" defaultValue={textColor} />
	</form>
	<div class="placeholder">
		{
			isSelected && calloutInspector()
			}

	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid functiprops.attributes.on.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
save: function( props ) {
	return (
	<div className={ props.className } style={{width: props.attributes.width.value + '%'}}>
    <InnerBlocks.Content />
	</div>
	);
},
		
} );
