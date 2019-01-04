/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings, MediaUpload } = wp.editor;
const { PanelBody, RangeControl, SelectControl, ToggleControl, Button, Spinner } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Width', 'floating-callout' ) } >
					<RangeControl
						value={ attributes.width }
						label={ __( 'Inner Width (%)', 'floating-callout' ) }
						onChange={ ( width ) => setAttributes( { width } ) }
						min={ 30 }
						max={ 50 }
						step={ 5 }
						allowReset={ true }
					/>
					{ attributes.width &&
						<SelectControl
							label={ __( 'Position', 'floating-callout' ) }
							value={ attributes.position }
							onChange={ ( position ) => setAttributes( { position } ) }
							options={ [
								{ value: 'left', label: __( 'Left', 'floating-callout' ) },
								{ value: 'right', label: __( 'Right', 'floating-callout' ) },
							] }
						/> }
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Background Color' ) }
					colorSettings={ [
						{
							value: attributes.backgroundColor,
							onChange: ( backgroundColor ) => setAttributes( { backgroundColor } ),
							label: __( 'Background Color', 'floating-callout' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBody title={ __( 'Background Image', 'floating-callout' ) } >
					{ !! attributes.backgroundImage &&
						<MediaUpload
							title={ __( 'Set featured image', 'floating-callout' ) }
							onSelect={ ( value ) => setAttributes( { backgroundImage: value.url } ) }
							type="image"
							modalClass="editor-post-featured-image__media-modal"
							render={ ( { open } ) => (
								<Button className="editor-post-featured-image__preview" onClick={ open }>
									{ attributes.backgroundImage &&
										<img src={ attributes.backgroundImage } alt={ __( 'Featured image', 'floating-callout' ) } />
									}
									{ ! attributes.backgroundImage && <Spinner /> }
								</Button>
							) }
						/>
					}
					{ ! attributes.backgroundImage &&
						<MediaUpload
							onSelect={ ( value ) => setAttributes( { backgroundImage: value.url } ) }
							type="image"
							value={ attributes.backgroundImage }
							render={ ( { open } ) => (
								<Button className="button" onClick={ open }>
									{ __( 'Open Media Library', 'floating-callout' ) }
								</Button>
							) }
						/>
					}
					{ !! attributes.backgroundImage &&
						<Button onClick={ () => setAttributes( { backgroundImage: undefined } ) } isLink isDestructive>
							{ __( 'Remove Image', 'floating-callout' ) }
						</Button>
					}
				</PanelBody>
				<PanelBody title={ __( 'Background Opacity', 'floating-callout' ) } >
					<RangeControl
						value={ attributes.backgroundOpacity }
						label={ __( 'Background Opacity (%)', 'floating-callout' ) }
						onChange={ ( backgroundOpacity ) => setAttributes( { backgroundOpacity } ) }
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
				</PanelBody>
				<PanelBody initialOpen={ true } title={ __( 'Padding', 'floating-callout' ) }>
					<RangeControl
						value={ attributes.paddingTop }
						label={ __( 'Padding Top', 'floating-callout' ) }
						onChange={ ( paddingTop ) => setAttributes( { paddingTop } ) }
						min={ 0 }
						max={ 250 }
					/>
					<RangeControl
						value={ attributes.paddingRight }
						label={ __( 'Padding Right', 'floating-callout' ) }
						onChange={ ( paddingRight ) => setAttributes( { paddingRight } ) }
						min={ 0 }
						max={ 250 }
					/>
					<RangeControl
						value={ attributes.paddingBottom }
						label={ __( 'Padding Bottom', 'floating-callout' ) }
						onChange={ ( paddingBottom ) => setAttributes( { paddingBottom } ) }
						min={ 0 }
						max={ 250 }
					/>
					<RangeControl
						value={ attributes.paddingLeft }
						label={ __( 'Padding Left', 'floating-callout' ) }
						onChange={ ( paddingLeft ) => setAttributes( { paddingLeft } ) }
						min={ 0 }
						max={ 250 }
					/>
				</PanelBody>
				<PanelBody initialOpen={ true } title={ __( 'Margin', 'floating-callout' ) }>
					<RangeControl
						value={ attributes.marginTop }
						label={ __( 'Margin Top', 'floating-callout' ) }
						onChange={ ( marginTop ) => setAttributes( { marginTop } ) }
						min={ 0 }
						max={ 250 }
					/>
					<RangeControl
						value={ attributes.marginBottom }
						label={ __( 'Margin Bottom', 'floating-callout' ) }
						onChange={ ( marginBottom ) => setAttributes( { marginBottom } ) }
						min={ 0 }
						max={ 250 }
					/>
				</PanelBody>
				<PanelBody initialOpen={ true } title={ __( 'Border', 'floating-callout' ) }>
						<SelectControl
							label={ __( 'Type', 'floating-callout' ) }
							value={ attributes.bordertype }
							onChange={ ( bordertype ) => setAttributes( { bordertype } ) }
							options={ [
								{ value: '', label: __( 'None', 'floating-callout' ) },
								{ value: 'left', label: __( 'Left', 'floating-callout' ) },
								{ value: 'right', label: __( 'Right', 'floating-callout' ) },
								{ value: 'all', label: __( 'All Sides', 'floating-callout' ) },
							] }
						/>
						<SelectControl
							label={ __( 'Width', 'floating-callout' ) }
							value={ attributes.borderwidth }
							onChange={ ( borderwidth ) => setAttributes( { borderwidth } ) }
							options={ [
								{ value: 'thin', label: __( 'Thin', 'floating-callout' ) },
								{ value: 'medium', label: __( 'Medium', 'floating-callout' ) },
								{ value: 'thick', label: __( 'Thick', 'floating-callout' ) },
							] }
						/>
						<SelectControl
							label={ __( 'Style', 'floating-callout' ) }
							value={ attributes.borderstyle }
							onChange={ ( borderstyle ) => setAttributes( { borderstyle } ) }
							options={ [
								{ value: 'solid', label: __( 'Solid', 'floating-callout' ) },
								{ value: 'dashed', label: __( 'Dashed', 'floating-callout' ) },
								{ value: 'dotted', label: __( 'Dotted', 'floating-callout' ) },
								{ value: 'double', label: __( 'Double', 'floating-callout' ) },
								{ value: 'groove', label: __( 'Groove', 'floating-callout' ) },
								{ value: 'inset', label: __( 'Inset', 'floating-callout' ) },
								{ value: 'ridge', label: __( 'Ridge', 'floating-callout' ) },
							] }
						/>
						<SelectControl
							label={ __( 'Rounding (Border Radius)', 'floating-callout' ) }
							value={ attributes.borderRadius }
							onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
							options={ [
								{ value: '', label: __( 'None', 'floating-callout' ) },
								{ value: '3px', label: __( 'Slight - 3px', 'floating-callout' ) },
								{ value: '5px', label: __( 'Round - 5px', 'floating-callout' ) },
								{ value: '10px', label: __( 'Rounder - 10px', 'floating-callout' ) },
								{ value: '20px', label: __( 'Roundest - 20px', 'floating-callout' ) },
							] }
						/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Border Color' ) }
					colorSettings={ [
						{
							value: attributes.borderColor,
							onChange: ( borderColor ) => setAttributes( { borderColor } ),
							label: __( 'Border Color', 'floating-callout' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		);
	}

}
