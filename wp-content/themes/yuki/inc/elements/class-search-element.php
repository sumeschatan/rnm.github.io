<?php

/**
 * Search element
 *
 * @package Yuki
 */
use  LottaFramework\Customizer\Controls\Background ;
use  LottaFramework\Customizer\Controls\ColorPicker ;
use  LottaFramework\Customizer\Controls\Condition ;
use  LottaFramework\Customizer\Controls\Icons ;
use  LottaFramework\Customizer\Controls\Radio ;
use  LottaFramework\Customizer\Controls\Separator ;
use  LottaFramework\Customizer\Controls\Slider ;
use  LottaFramework\Customizer\Controls\Tabs ;
use  LottaFramework\Customizer\Controls\Text ;
use  LottaFramework\Customizer\GenericBuilder\Element ;
use  LottaFramework\Facades\Css ;
use  LottaFramework\Facades\CZ ;
use  LottaFramework\Icons\IconsManager ;
use  LottaFramework\Utils ;

if ( !defined( 'ABSPATH' ) ) {
    exit;
    // Exit if accessed directly.
}

if ( !class_exists( 'Yuki_Search_Element' ) ) {
    class Yuki_Search_Element extends Element
    {
        use  Yuki_Icon_Button_Controls ;
        /**
         * {@inheritDoc}
         */
        public function getControls()
        {
            $controls = [ ( new Radio( $this->getSlug( 'style' ) ) )->setLabel( __( 'Search Style', 'yuki' ) )->setDefaultValue( 'modal' )->selectiveRefresh( ...$this->selectiveRefresh() )->bindSelectiveRefresh( 'yuki-header-selective-css' )->buttonsGroupView()->setChoices( [
                'modal'  => __( 'Modal', 'yuki' ),
                'popup'  => __( 'Popup (Pro)', 'yuki' ),
                'inline' => __( 'Inline (Pro)', 'yuki' ),
            ] ) ];
            $controls = array_merge( $controls, [ ( new Condition() )->setCondition( [
                $this->getSlug( 'style' ) => 'inline',
            ] )->setControls( [ yuki_upsell_info_control( __( 'Inline search is available in our %sPro Version%s', 'yuki' ) )->showBackground() ] ), ( new Condition() )->setCondition( [
                $this->getSlug( 'style' ) => 'popup',
            ] )->setControls( [ yuki_upsell_info_control( __( 'Popup search is available in our %sPro Version%s', 'yuki' ) )->showBackground() ] ) ] );
            return array_merge( $controls, [ ( new Tabs() )->setLabel( __( 'Search Icon', 'yuki' ) )->showLabel()->setActiveTab( 'icon' )->addTab( 'icon', __( 'Icon', 'yuki' ), array_merge( [ ( new Icons( $this->getSlug( 'icon_button_icon' ) ) )->setLabel( __( 'Icon', 'yuki' ) )->selectiveRefresh( ...$this->selectiveRefresh() )->setDefaultValue( [
                'value'   => 'fas fa-magnifying-glass',
                'library' => 'fa-solid',
            ] ), new Separator() ], $this->getIconControls( [
                'render-callback' => $this->selectiveRefresh(),
                'selector'        => ".{$this->slug}",
            ] ) ) )->addTab( 'style', __( 'Style', 'yuki' ), $this->getIconStyleControls( [
                'selector' => ".{$this->slug}",
            ] ) ), ( new Text( $this->getSlug( 'placeholder' ) ) )->setLabel( __( 'Placeholder Text', 'yuki' ) )->selectiveRefresh( '.yuki-search-modal-form', [ $this, 'render_search_form' ] )->setDefaultValue( __( 'Type & Hint Enter', 'yuki' ) ), ( new Condition() )->setCondition( [
                $this->getSlug( 'style' ) => 'modal',
            ] )->setControls( [ ( new Tabs() )->setLabel( __( 'Search Modal', 'yuki' ) )->showLabel()->setActiveTab( 'form' )->addTab( 'form', __( 'Form', 'yuki' ), [ ( new ColorPicker( $this->getSlug( 'input_color' ) ) )->setLabel( __( 'Input Color', 'yuki' ) )->bindSelectiveRefresh( 'yuki-header-selective-css' )->addColor( 'initial', __( 'Initial', 'yuki' ), 'var(--yuki-accent-color)' )->addColor( 'focus', __( 'Focus', 'yuki' ), 'var(--yuki-accent-color)' )->addColor( 'placeholder', __( 'Placeholder', 'yuki' ), 'var(--yuki-accent-color)' ), ( new ColorPicker( $this->getSlug( 'input_border_color' ) ) )->setLabel( __( 'Input Border Color', 'yuki' ) )->bindSelectiveRefresh( 'yuki-header-selective-css' )->addColor( 'initial', __( 'Initial', 'yuki' ), 'var(--yuki-base-200)' )->addColor( 'focus', __( 'Focus', 'yuki' ), 'var(--yuki-primary-color)' ) ] )->addTab( 'modal', __( 'Modal', 'yuki' ), [ ( new ColorPicker( $this->getSlug( 'modal_close_color' ) ) )->setLabel( __( 'Close Button Color', 'yuki' ) )->bindSelectiveRefresh( 'yuki-header-selective-css' )->addColor( 'initial', __( 'Initial', 'yuki' ), 'var(--yuki-accent-active)' )->addColor( 'hover', __( 'Hover', 'yuki' ), 'var(--yuki-primary-color)' ), new Separator(), ( new Background( $this->getSlug( 'modal_background' ) ) )->setLabel( __( 'Modal Background', 'yuki' ) )->bindSelectiveRefresh( 'yuki-header-selective-css' )->setDefaultValue( [
                'type'  => 'color',
                'color' => 'var(--yuki-base-color)',
            ] ) ] ) ] ) ] );
        }
        
        /**
         * {@inheritDoc}
         */
        public function enqueue_frontend_scripts()
        {
            $search_style = ( yuki_fs()->can_use_premium_code() ? CZ::get( $this->getSlug( 'style' ) ) : 'modal' );
            // Add button dynamic css
            add_filter( 'yuki_filter_dynamic_css', function ( $css ) use( $search_style ) {
                
                if ( $search_style !== 'inline' ) {
                    $css[".{$this->slug}"] = [
                        'width' => 'auto',
                    ];
                    $css[".{$this->slug} .yuki-search-button"] = $this->getIconButtonCss();
                }
                
                if ( $search_style === 'modal' ) {
                    $css[".{$this->slug}_modal"] = array_merge(
                        Css::background( CZ::get( $this->getSlug( 'modal_background' ) ) ),
                        Css::colors( CZ::get( $this->getSlug( 'input_color' ) ), [
                        'initial'     => '--yuki-search-input-initial-color',
                        'focus'       => '--yuki-search-input-focus-color',
                        'placeholder' => '--yuki-search-input-placeholder-color',
                    ] ),
                        Css::colors( CZ::get( $this->getSlug( 'input_border_color' ) ), [
                        'initial' => '--yuki-search-input-border-initial-color',
                        'focus'   => '--yuki-search-input-border-focus-color',
                    ] ),
                        Css::colors( CZ::get( $this->getSlug( 'modal_close_color' ) ), [
                        'initial' => '--yuki-modal-action-initial',
                        'hover'   => '--yuki-modal-action-hover',
                    ] )
                    );
                }
                //				$css[".{$this->slug}_modal .search-input"] = [
                //					'text-align' => 'center',
                //				];
                return $css;
            } );
            if ( 'modal' === $search_style && true !== has_action( 'yuki_action_before', [ $this, 'render_search_modal' ] ) ) {
                add_action( 'yuki_action_before', [ $this, 'render_search_modal' ] );
            }
        }
        
        /**
         * Render search form
         */
        public function render_search_form( $args = array() )
        {
            get_search_form( wp_parse_args( $args, [
                'placeholder'   => CZ::get( $this->getSlug( 'placeholder' ) ),
                'submit_render' => function () {
                if ( yuki_fs()->can_use_premium_code() && CZ::get( $this->getSlug( 'style' ) ) !== 'modal' ) {
                    return;
                }
                ?>
                    <button type="submit" class="yuki-search-submit">
						<?php 
                IconsManager::print( CZ::get( $this->getSlug( 'icon_button_icon' ) ) );
                ?>
                    </button>
					<?php 
            },
            ] ) );
        }
        
        /**
         * Render search modal
         */
        public function render_search_modal()
        {
            $css = [ 'yuki-search-modal yuki-modal', $this->slug . '_modal' ];
            ?>
            <div id="yuki-search-modal" data-toggle-behaviour="toggle" class="<?php 
            Utils::the_clsx( $css );
            ?>">

                <div class="yuki-modal-content">
                    <div class="max-w-screen-md mx-auto mt-60 yuki-search-modal-form form-controls form-underline relative"
                         data-redirect-focus="#yuki-close-search-modal-button">
						<?php 
            $this->render_search_form();
            ?>
                    </div>
                </div>

                <div class="yuki-modal-actions">
                    <button id="yuki-close-search-modal-button"
                            class="yuki-close-modal"
                            data-toggle-target="#yuki-search-modal"
                            data-toggle-hidden-focus=".yuki-search-button"
                            type="button"
                    >
                        <i class="fa fa-times"></i>
                    </button>
                </div>
            </div>
			<?php 
        }
        
        /**
         * {@inheritDoc}
         */
        public function render( $attrs = array() )
        {
            $shape = CZ::get( $this->getSlug( 'icon_button_icon_shape' ) );
            $fill = CZ::get( $this->getSlug( 'icon_button_shape_fill_type' ) );
            $search_style = ( yuki_fs()->can_use_premium_code() ? CZ::get( $this->getSlug( 'style' ) ) : 'modal' );
            $form_style = CZ::get( $this->getSlug( 'form_style' ) );
            $attrs['class'] = ($attrs['class'] ?? '') . ' yuki-search-wrap yuki-form relative ' . $this->slug;
            if ( $form_style !== 'inherit' ) {
                $attrs['class'] .= ' yuki-form-' . $form_style;
            }
            foreach ( $attrs as $attr => $value ) {
                $this->add_render_attribute( 'search-wrap', $attr, $value );
            }
            /**
             * Modal
             */
            $button_classes['class'] = Utils::clsx( [
                'yuki-search-button',
                'yuki-icon-button',
                'yuki-icon-button-' . $shape,
                'yuki-icon-button-' . $fill => $shape !== 'none',
                $this->slug
            ], $button_classes['class'] ?? [] );
            foreach ( $button_classes as $attr => $value ) {
                $this->add_render_attribute( 'search-button', $attr, $value );
            }
            
            if ( $search_style === 'modal' ) {
                $this->add_render_attribute( 'search-button', 'data-toggle-target', '#yuki-search-modal' );
                $this->add_render_attribute( 'search-button', ' data-toggle-show-focus', '#yuki-search-modal :focusable' );
            }
            
            ?>
            <div <?php 
            $this->print_attribute_string( 'search-wrap' );
            ?>>
                <button type="button" <?php 
            $this->print_attribute_string( 'search-button' );
            ?>>
					<?php 
            IconsManager::print( CZ::get( $this->getSlug( 'icon_button_icon' ) ) );
            ?>
                </button>

				<?php 
            ?>
            </div>
			<?php 
        }
    
    }
}