<?php
/**
 * Template for displaying search forms
 *
 * @package Yuki
 */

$uniqid      = uniqid( 'search-form-' );
$aria_label  = ! empty( $args['aria_label'] ) ? 'aria-label="' . esc_attr( $args['aria_label'] ) . '"' : '';
$placeholder = $args['placeholder'] ?? __( 'Search', 'yuki' );

// Backward compatibility, in case a child theme template uses a `label` argument.
if ( empty( $aria_label ) && ! empty( $args['label'] ) ) {
	$aria_label = 'aria-label="' . esc_attr( $args['label'] ) . '"';
}
?>
<form role="search" <?php echo esc_attr( $aria_label ); ?> method="get"
      action="<?php echo esc_url( home_url( '/' ) ); ?>"
      class="search-form"
>
    <div class="relative">
        <label class="flex items-center flex-grow mb-0" for="<?php echo esc_attr( $uniqid ); ?>">
            <span class="screen-reader-text"><?php _e( 'Search for:', 'yuki' ); ?></span>
            <input type="search" id="<?php echo esc_attr( $uniqid ); ?>"
                   placeholder="<?php echo esc_attr( $placeholder ) ?>"
                   value="<?php echo get_search_query(); ?>" name="s"
                   class="search-input"
            />
			<?php if ( ! isset( $args['submit_render'] ) && ! isset( $args['disable_submit'] ) ): ?>
                <button type="submit" class="search-submit">
                    <i class="fas fa-search"></i>
                </button>
			<?php endif; ?>
			<?php
			if ( isset( $args['submit_render'] ) ) {
				call_user_func( $args['submit_render'] );
			}
			?>
        </label>
    </div>
</form>
