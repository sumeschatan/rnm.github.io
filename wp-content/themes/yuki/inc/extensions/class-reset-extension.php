<?php

if ( ! class_exists( 'Yuki_Reset_Extension' ) ) {

	class Yuki_Reset_Extension {

		public function __construct() {
			add_filter( 'yuki_customizer_call_to_actions', [ $this, 'register_cta' ] );
			add_action( 'customize_register', [ $this, 'customize_register' ] );
			add_action( 'yuki_after_lotta_framework_bootstrap', [ $this, 'customize_register' ] );
			add_action( 'admin_action_yuki_reset_customizer_options', [ $this, 'reset_customizer_options' ] );
		}

		public function register_cta( $actions ) {
			$actions[] = '#yuki_reset_customizer_options .button';

			return $actions;
		}

		public function customize_register( $wp_customize ) {
			if ( ! $wp_customize instanceof \WP_Customize_Manager ) {
				$wp_customize = null;
			}

			if ( ! $wp_customize ) {
				return;
			}

			$wp_customize->add_section( new \LottaFramework\Customizer\CallToActionSection( $wp_customize, 'yuki_reset_customizer_options', array(
				'priority' => 999999,
				'title'    => __( 'Reset Customizer Options', 'yuki' ),
				'link'     => array(
					'url' => esc_url( add_query_arg( array( 'action' => 'yuki_reset_customizer_options' ), admin_url( 'admin.php' ) ) ),
				)
			) ) );
		}

		public function reset_customizer_options() {
			\LottaFramework\Facades\CZ::reset();
		}
	}

}
new Yuki_Reset_Extension();
